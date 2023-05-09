import express from 'express';

import { authenticationController } from '../../dependencies';

const authenticationRouter = express.Router();

authenticationRouter.post('', authenticationController.authenticateUser.bind(authenticationController));

export { authenticationRouter };
