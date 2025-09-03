import sql from 'mssql';
import { env } from '$env/dynamic/private';

async function createConnectionPool(dbName: string) {
  const config = {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    server: env.DB_SERVER,
    database: env.DB_NAME,
    options: {
      encrypt: true, 
      trustServerCertificate: true
    }
};

  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (err) {
    console.error(`Database connection to ${dbName} failed:`, err);
    throw err; 
  }
}

// Export specific connection functions for each database.
export async function getBlueprintsDbConnection() {
  return createConnectionPool('Blueprints');
}