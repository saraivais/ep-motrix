import IUser from '../interfaces/IUser';
import User from '../database/models/user';

class UserService {
  constructor(private model: typeof User) {}

  private async recoverUserInformation(email: string):Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    return user;
  }

}

export default UserService;
