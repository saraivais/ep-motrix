import IUser from '../interfaces/IUser';
import User from '../database/models/user';
import CustomError from '../errors/customError';
import errorCatalog from '../errors/errorCatalog';
import { verifyPassword, hashPassword } from '../helpers/bcrypt';
import { generateJwtToken } from '../helpers/jwtToken';

class UserService {
  constructor(private model: typeof User) {}

  private async recoverUserInformation(email: string):Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

  public async login(loginInformation: IUser):Promise<string> {
    const userInfo = await this.recoverUserInformation(loginInformation.email);
    if (!userInfo) {
      throw new CustomError(errorCatalog.userNotFound);
    }
    verifyPassword(loginInformation.password, userInfo.password);
    const token = generateJwtToken(userInfo);

    return token;
  }

}

export default UserService;
