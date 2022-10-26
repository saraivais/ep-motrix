import IUser from '../interfaces/IUser';
import User from '../database/models/user';

class UserService {
  constructor(private model: typeof User) {}

}

export default UserService;
