import {db} from '../../lib/db.js';

export default async (contecst) => {
  const {params, body, req, res} = contecst;
  const collection = db().collection('users');
  const existed = await collection.find({email: body.email}).toArray();

  if(existed.length > 0){
    return JSON.stringify({
      hasError: true,
      message: 'Email is taken',
    });
  }
  const result = await collection.insertOne(body);
  const userId = result.insertedId.toString();

  res.setHeader('Set-Cookie', [`userId=${userId}; Path=/`]);
  return JSON.stringify({
    hasError: false,
    message: 'Success registration',
    userId: result.insertedId.toString(),
  });
}