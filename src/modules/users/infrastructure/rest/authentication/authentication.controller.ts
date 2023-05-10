import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { IAuthenticationManager } from '../../../domain/interfaces/IAuthenticationManager';

export class AuthenticationController {
  constructor(private readonly authenticationManager: IAuthenticationManager) {}

  async authenticateUser(req: Request, res: Response): Promise<Response<any>> {
    const { email, password } = req.body;
    const session = req.session;

    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Email and password are required' });
    }

    const loginResult = await this.authenticationManager.authenticateUser(email, password);

    if (!loginResult) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Invalid credentials' });
    }

    session.user = loginResult;

    return res.status(StatusCodes.OK).send(loginResult);
  }
}
