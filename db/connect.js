import { MongoClient } from 'mongodb';
import { useEffect, useState } from 'react';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
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
    return client.db('your-database-name');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    throw error;
  }
}

export function useProjectsData() {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (cachedDb) {
        const collection = cachedDb.collection('projects');
        const data = await collection.find({}).toArray();
        setProjectsData(data);
      } else {
        const client = new MongoClient(MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await client.connect();
        const db = client.db('your-database-name');
        cachedDb = db;
        const collection = db.collection('projects');
        const data = await collection.find({}).toArray();
        setProjectsData(data);
      }
    }

    fetchData();

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return projectsData;
}