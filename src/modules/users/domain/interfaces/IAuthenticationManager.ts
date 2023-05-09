export interface IAuthenticationManager {
  authenticateUser(userName: string, password: string): Promise<void>;
}
