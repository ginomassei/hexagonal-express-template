import { ManagerDb, Provider } from 'mongo-connect-provider';
import { logger as providerLogger } from 'mongo-connect-provider';

import { ILogger } from '../modules/shared/domain/ILogger';
import { config } from './app.config';

export class DatabaseConfig {
  static async connectDatabase(logger: ILogger) {
    providerLogger.setLogger(logger);
    await ManagerDb.connect(false, 'test', config.database.dbHost, '', false, Provider.None);
  }
}
