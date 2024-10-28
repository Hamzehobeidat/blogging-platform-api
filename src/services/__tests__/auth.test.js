import { supabase } from '../../config/supabaseClient';
import generateAccessToken from '../../../utils/generateAccessToken';
import { mockToken, mockUser } from './mocks/mockData';
import { authService } from '../../services';
import bcrypt from 'bcrypt';

jest.mock('../../config/supabaseClient', () => {
  const mSupabase = {
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    insert: jest.fn(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    single: jest.fn()
  };
  return { supabase: mSupabase };
});

jest.mock('bcrypt', () => ({
  compare: jest.fn()
}));

jest.mock('../../../utils/generateAccessToken', () => jest.fn());

describe('Auth Service - signIn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('signIn should return a token for valid credentials', async () => {
    supabase.single.mockResolvedValue({ data: mockUser, error: null });
    bcrypt.compare.mockResolvedValue(true);

    // Mock the token generation function
    generateAccessToken.mockReturnValue(mockToken);

    const token = await authService.signIn({ email: mockUser.email, password: 'plainPassword' });

    expect(supabase.from).toHaveBeenCalledWith('user');
    expect(supabase.select).toHaveBeenCalledWith('id, email, password, first_name, last_name');
    expect(supabase.eq).toHaveBeenCalledWith('email', mockUser.email);
    expect(supabase.single).toHaveBeenCalled();
    expect(bcrypt.compare).toHaveBeenCalledWith('plainPassword', mockUser.password);
    expect(token).toBe(mockToken);
  });
});
