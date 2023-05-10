import { User } from '../models/user';

export interface IAuthenticationManager {
  authenticateUser(userName: string, password: string): Promise<User | null>;
}
