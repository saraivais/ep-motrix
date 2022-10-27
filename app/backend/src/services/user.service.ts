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

  public async create(newUserInformation: IUser) {
    const userInfo = await this.recoverUserInformation(newUserInformation.email);
    if (userInfo) {
      throw new CustomError(errorCatalog.alreadyInUse);
    }
    const passwordToSave = hashPassword(newUserInformation.password);

    const createdUser = await this.model
      .create({ ...newUserInformation, password: passwordToSave });
    const token = generateJwtToken(createdUser);

    return token;
  }
}

export default UserService;
