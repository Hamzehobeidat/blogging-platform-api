import { StatusCodes } from 'http-status-codes';
import { authService } from '../../../services';

export const signIn = async (req, res, next) => {
  try {
    const accessToken = await authService.signIn(req.body);
    return accessToken
      ? res.status(StatusCodes.OK).json(accessToken)
      : res.status(StatusCodes.UNAUTHORIZED).send();
  } catch (err) {
    return next(err);
  }
};
export const signUp = async (req, res, next) => {
  try {
    const accessToken = await authService.signUp(req.body);
    return accessToken
      ? res.status(StatusCodes.OK).json(accessToken)
      : res.status(StatusCodes.UNAUTHORIZED).send();
  } catch (err) {
    return next(err);
  }
};
