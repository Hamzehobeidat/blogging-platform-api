import { StatusCodes } from 'http-status-codes';
import { supabase } from '../../config/supabaseClient';

const checkPostOwnership = async (req, res, next) => {
  try {
    const userId = req?.user?.id;
    const postId = req.params.id;

    const { data: post, error } = await supabase
      .from('post')
      .select('user_id')
      .eq('id', postId)
      .single();
    if (error || !post)
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Post not found' });

    if (post.user_id !== userId)
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: 'User is not authorized to modify this post' });
    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Failed to verify ownership' });
  }
};

export default checkPostOwnership;
