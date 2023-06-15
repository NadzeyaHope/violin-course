import {MongoClient} from 'mongodb';

const url = 'mongodb+srv://root:YlJ5Iu2uAbOEQ89B@cluster0.z95pt.mongodb.net/test';
const client = new MongoClient(url);

let _db

export const mongoConnect = async () => {
  await client.connect();
  console.log('Mongo success connect')
  _db = client.db('violin-course');
}

export const db = () => {
  return _db
}
