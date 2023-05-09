import { AuthenticationController } from '../../users/infrastructure/rest/authentication/authentication.controller';
import { UserController } from './rest/user.controller';

export const authenticationController = new AuthenticationController();
export const userController = new UserController();
