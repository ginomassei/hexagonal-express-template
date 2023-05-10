import { AuthenticationManager } from '../../../src/modules/users/application/AuthenticationManager';
import { IUserRepository } from '../../../src/modules/users/domain/interfaces/IUserRepository';
import { InMemoryUserRepository } from '../../../src/modules/users/infrastructure/repository/InMemoryUserRepository';

describe('AuthenticationManager', () => {
  let authenticationManager: AuthenticationManager;
  let userRepository: IUserRepository;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    authenticationManager = new AuthenticationManager(userRepository);
  });

  describe('authenticateUser', () => {
    it('should return null when user does not exist', async () => {
      const user = await authenticationManager.authenticateUser('nonvalid@email.com', 'password');

      expect(user).toBeNull();
    });

    it('should return null when password is invalid', async () => {
      const user = await authenticationManager.authenticateUser('something@something.com', 'invalid-password');

      expect(user).toBeNull();
    });

    it('should return the user when password is valid', async () => {
      const user = await authenticationManager.authenticateUser('something@something.com', 'valid-password');

      expect(user).not.toBeNull();
    });

    it('should return null when no email is provided', async () => {
      const user = await authenticationManager.authenticateUser('', 'valid-password');

      expect(user).toBeNull();
    });
  });
});
