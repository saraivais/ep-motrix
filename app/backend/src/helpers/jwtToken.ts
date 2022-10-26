import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { SignOptions } from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import CustomError from '../errors/customError';
import errorCatalog from '../errors/errorCatalog';

const jwtSecret = process.env.JWT_SECRET || 'jwt_secret';

export function generateJwtToken({ id }: IUser):string {
  const jwtConfig: SignOptions = {
    algorithm: 'HS256',
  };

  const token:string = jwt.sign({ data: { id } }, jwtSecret, jwtConfig);
  return token;
}

