import * as bcrypt from 'bcryptjs';
import CustomError from '../errors/customError';
import errorCatalog from '../errors/errorCatalog';

export function verifyPassword(password: string, hashedPassword: string):void {
  const isValid = bcrypt.compareSync(password, hashedPassword);
  if (!isValid) {
    throw new CustomError(errorCatalog.wrongPassword);
  }
}

export function hashPassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
