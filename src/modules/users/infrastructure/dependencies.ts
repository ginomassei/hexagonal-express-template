import { AuthenticationController } from '../../users/infrastructure/rest/authentication/authentication.controller';
import { AuthenticationManager } from '../application/AuthenticationManager';
import { MongoUserRepository } from './repository/MongoUserRepository';
import { UserController } from './rest/user.controller';

const userMongoRepository = new MongoUserRepository();

const authenticationManager = new AuthenticationManager(userMongoRepository);

export const authenticationController = new AuthenticationController(authenticationManager);

export const userController = new UserController();
