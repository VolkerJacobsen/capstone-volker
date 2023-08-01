import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cachedDb = null;

export async function connectToDatabase() {
  const uri = MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    return client.db('capstone');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    throw error;
  }
}