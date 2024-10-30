import bcrypt from 'bcrypt';
import { supabase } from '../config/supabaseClient';
import generateAccessToken from '../utils/generateAccessToken';

const signIn = async ({ email, password }) => {
  const { data: user, error } = await supabase
    .from('user')
    .select('id, email, password, first_name, last_name')
    .eq('email', email)
    .single();

  if (error || !user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }
  const token = generateAccessToken(user);

  return token;
};

const signUp = async ({ email, password, firstName, lastName }) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const { data: userData, error } = await supabase
    .from('user')
    .insert([{ email, password: hashedPassword, first_name: firstName, last_name: lastName }])
    .select('*')
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const token = generateAccessToken(userData);

  return token;
};

export default {
  signIn,
  signUp
};
