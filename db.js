import { MongoClient } from 'mongodb';

// https://www.mongodb.com/products/compass
// https://www.npmjs.com/package/mongodb

// Connection URL
const url = 'mongodb+srv://root:YlJ5Iu2uAbOEQ89B@cluster0.z95pt.mongodb.net/test';
const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();

  const db = client.db('violin-course');
  const users = db.collection('users');

  const result = await users.find({}).toArray();
  await users.insertOne({
    name: 'Denis',
    email: 'jkljljj2@jlkjkl.com'
  })

  // console.log(result)
}

main()