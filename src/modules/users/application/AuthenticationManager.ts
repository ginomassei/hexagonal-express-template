import { IAuthenticationManager } from '../domain/interfaces/IAuthenticationManager';
import { IUserRepository } from '../domain/interfaces/IUserRepository';

export class AuthenticationManager implements IAuthenticationManager {
  constructor(private readonly userRepository: IUserRepository) {}

  authenticateUser(userName: string, password: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
