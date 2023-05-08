export const config = {
  server: {
    port: process.env.PORT || 3000
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*'
  },
  database: {
    dbHost: process.env.DB_URI || '127.0.0.1:27017'
  },
  isDevEnvironment: process.env.NODE_ENV === 'development'
};
