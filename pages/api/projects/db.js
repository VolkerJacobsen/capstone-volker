
import { MongoClient } from 'mongodb';

async function connectToDatabase() {
  const uri = 'your-mongodb-connection-string';
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    return client.db('your-database-name');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToDatabase;