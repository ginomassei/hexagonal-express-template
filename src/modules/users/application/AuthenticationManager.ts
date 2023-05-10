import bcrypt from 'bcryptjs';

import { IAuthenticationManager } from '../domain/interfaces/IAuthenticationManager';
import { IUserRepository } from '../domain/interfaces/IUserRepository';
import { User } from '../domain/models/user';

export class AuthenticationManager implements IAuthenticationManager {
  constructor(private readonly userRepository: IUserRepository) {}

  async authenticateUser(email: string, password: string): Promise<User | null> {
    const authenticatedUser = await this.userRepository.getByEmail(email);

    if (!authenticatedUser) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, authenticatedUser.password);

    if (!isPasswordValid) {
      return null;
    }

    return authenticatedUser;
  }
}
