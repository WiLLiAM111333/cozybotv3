import { connect } from 'mongoose';
import { Constants } from '../util/Constants';

const { MONGODB_CONNECTION_URI } = Constants;

export const connectDB = async (): Promise<void> => {
  try {
    const { connection } = await connect(MONGODB_CONNECTION_URI, { dbName: 'cozy' });

    console.log(`Connected to MongoDB: ${connection.host}@${connection.db.databaseName}`);
  } catch (err) {
    throw err;
  }
}