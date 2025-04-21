// * used to migrate the database to Neon

import { db } from './index';
import { migrate } from 'drizzle-orm/neon-http/migrator';

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: 'src/db/migrations' });
    console.log('Migrations completed successfully!');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
};

main();
