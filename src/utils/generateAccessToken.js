import jwt from 'jsonwebtoken';

const secret = process.env.AUTH_JWT_SECRET;

const generateAccessToken = user => {
  const accessToken = jwt.sign(
    {
      id: user?.id,
      firstName: user.first_name,
      lastName: user?.last_name,
      email: user?.email
    },
    secret,
    { expiresIn: '1d' }
  );
  return { accessToken };
};

export default generateAccessToken;
