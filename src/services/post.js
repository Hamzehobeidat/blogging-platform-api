import { supabase } from '../config/supabaseClient';

const createPost = async (body, user) => {
  const { title, content } = body;
  const { status, error } = await supabase
    .from('post')
    .insert([{ user_id: user.id, title, content }]);
  if (error) throw error;
  return status;
};

const getPosts = async () => {
  const { data, error } = await supabase.from('post').select('*');
  if (error) throw error;
  return data;
};

const getPostById = async params => {
  const { id } = params;
  const { data, error } = await supabase.from('post').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
};

const updatePost = async (params, body) => {
  const { id } = params;
  const { title, content } = body;
  const { status, error } = await supabase.from('post').update({ title, content }).eq('id', id);
  if (error) throw error;
  return status;
};

const deletePost = async params => {
  const { id } = params;
  const { status, error } = await supabase.from('post').delete().eq('id', id);
  if (error) throw error;
  return status;
};

const getUserPostsByUserId = async user => {
  const { data, error } = await supabase.from('post').select('*').eq('user_id', user?.id);
  if (error) throw error;
  return data;
};

export default {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getUserPostsByUserId
};
