import { StatusCodes } from 'http-status-codes';
import { supabase } from '../../config/supabaseClient';

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;

  const { data: user } = await supabase.from('user').select('*').eq('email', email).single();

  if (user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User already exists' });
  }
  next();
};

export default checkUserExists;
