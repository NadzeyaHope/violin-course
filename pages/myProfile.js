import Layout from "../components/Layout.js";
import Navigation from "../components/Navigation.js";
import {db} from '../lib/db.js';
import { ObjectId } from "mongodb";

export default async (context) => {
    const {req} = context;
    const {cookie} = req.headers;
    if (!cookie) {
      return `
      ${Layout(`
          Вы должны войти на сайт
      `)}  
    `
    }
  
    const userId = cookie.split('=')[1];
    const collection = db().collection('users')
  
    const user = await collection.findOne({_id: new ObjectId(userId)});
  
    if (!user) {
      return `
      ${Layout(`
          Вы должны войти на сайт
      `)}  
    `
    }
    return `
    ${Layout(`
    ${Navigation()}
    <h1>My Profile</h1>
    <h2>Hello ${user.email}</h2>
    <h2>Password: ${user.password}</h2>
`)}  
  `
};  