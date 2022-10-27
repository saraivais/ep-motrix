import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import CustomError from '../errors/customError';
import errorCatalog from '../errors/errorCatalog';

const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

export default function verifyAuthorization(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const token = request.headers.authorization;
  try {
    jwt.verify(token as string, jwtSecret);
    next();
  } catch (err) {
    throw new CustomError(errorCatalog.invalidToken);
  }
}
