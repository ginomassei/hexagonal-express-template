import { AuthorizerFunction, Session } from 'session-manager-express';

export const authorizers: AuthorizerFunction[] = [
  async (session: Session) => {
    if (session.user.id === '1') {
      return true;
    }
    return false;
  }
];
