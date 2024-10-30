import { supabase } from '../../config/supabaseClient';
import { postService } from '../../services';
import { mockPost, mockUser } from './mocks/mockData';

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
describe('Post Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createPost should create a post successfully', async () => {
    supabase.from().insert.mockResolvedValue({ body: mockPost });

    await postService.createPost(
      {
        title: mockPost.title,
        content: mockPost.content
      },
      { id: mockUser.id }
    );
    expect(supabase.from).toHaveBeenCalledWith('post');
    expect(supabase.insert).toHaveBeenCalledWith([
      {
        title: mockPost.title,
        content: mockPost.content,
        user_id: mockPost.userId
      }
    ]);
  });

  test('getPostById should return a post if it exists', async () => {
    supabase.single.mockResolvedValue({ data: mockPost, error: null });

    const post = await postService.getPostById({ id: +mockPost.id });

    expect(supabase.from).toHaveBeenCalledWith('post');
    expect(supabase.select).toHaveBeenCalledWith('*');
    expect(supabase.eq).toHaveBeenCalledWith('id', +mockPost.id);
    expect(post).toEqual(mockPost);
  });

  // Test for updating a post
  test('updatePost should update post data', async () => {
    const updatedData = { title: 'Updated Title' };
    const updatedPostMock = { ...mockPost, ...updatedData };

    supabase.single.mockResolvedValue({ data: updatedPostMock, error: null });

    await postService.updatePost({ id: +mockPost.id }, updatedData);

    expect(supabase.from).toHaveBeenCalledWith('post');
    expect(supabase.update).toHaveBeenCalledWith(updatedData);
    expect(supabase.eq).toHaveBeenCalledWith('id', +mockPost.id);
  });

  // Test for deleting a post
  test('deletePost should delete a post by ID', async () => {
    supabase.eq.mockResolvedValue({ error: null });

    await postService.deletePost({ id: +mockPost.id });

    expect(supabase.from).toHaveBeenCalledWith('post');
    expect(supabase.delete).toHaveBeenCalled();
    expect(supabase.eq).toHaveBeenCalledWith('id', +mockPost.id);
  });
});
