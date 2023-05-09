import { IUserRepository } from '../../domain/interfaces/IUserRepository';
import { User } from '../../domain/models/user';
import UserModel from './users';

export class MongoUserRepository implements IUserRepository {
  async getById(id: string): Promise<User | null> {
    const foundUser = (await UserModel.find({ _id: id }).lean()) as User;
    if (!foundUser) {
      return null;
    }
    return foundUser;
  }
}
