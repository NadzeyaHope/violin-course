import http from 'http';
import notFound from './pages/notFound.js';
import {isStaticUrl, serveRouteUrl, serveStaticUrl} from './lib/server.js';
import home from './pages/home.js';
import register from './pages/register.js';
import aboutUs from './pages/aboutUs.js';
import price from './pages/price.js';
import apiRegister from './pages/api/apiRegister.js';
import { mongoConnect } from './lib/db.js';
import login from './pages/login.js';
import myProfile from './pages/myProfile.js';
import apiLogin from './pages/api/apiLogin.js';

const port = process.env.PORT ?? 5000

const routes = {
  '/': home,
  '/api/login' : apiLogin,
  '/about-us': aboutUs,
  '/register' : register,
  '/price' : price,
  '/api/register' : apiRegister,
  '/login' : login,
  '/myProfile' : myProfile
}

const start = async () => {
  await mongoConnect();


const index = http.createServer((req, res) => {
  const { url } = req;
  if (isStaticUrl(url)) {
    serveStaticUrl(url, res);
  } else {
   return serveRouteUrl({routes, url, res, req, notFound})
  }
})

index.listen(port, () => {
  console.log(`Сервер запущен на хосте http://localhost:${port}`)
})}
start()