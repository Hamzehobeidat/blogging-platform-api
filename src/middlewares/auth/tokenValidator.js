import jwt from 'jsonwebtoken';

const secret = process.env.AUTH_JWT_SECRET;

const tokenValidator = (req, res, next) => {
  const token = req.headers && req.headers.authorization;
  if (!token)
    res.status(401).json({
      code: 401,
      message: 'Unauthenticated'
    });
  const bearerToken = token.replace('Bearer ', '');
  jwt.verify(bearerToken, secret, (err, decoded) => {
    if (err) {
      res.status(401).json({
        code: 401,
        message: 'Unauthenticated'
      });
    }
    req.user = { id: decoded.id };
    next();
  });
};
export default tokenValidator;
