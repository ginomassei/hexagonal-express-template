import { AuthorizerFunction, Session } from 'session-manager-express';

export const authorizers: AuthorizerFunction[] = [
  (session: Session) => {
    if (session.user) {
      return {
        valid: true
      };
    }
    return {
      error: new Error('Session must have an user'),
      valid: false
    };
  }
];
