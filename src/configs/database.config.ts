import { dbStartConnection, Provider } from 'mongo-connect-provider';

import { ILogger } from '../modules/shared/domain/ILogger';
import { config } from './app.config';

export class DatabaseConfig {
  static async connectDatabase(logger: ILogger) {
    await dbStartConnection(false, 'test', config.database.dbHost, '', false, Provider.None)
      .then(() => {
        logger.info('Database connected');
      })
      .catch((err) => {
        logger.info(`Database connection error: ${err}`);
      });
  }
}
