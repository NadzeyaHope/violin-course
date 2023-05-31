import http from 'http';
import notFound from './pages/notFound.js';
import {isStaticUrl, serveRouteUrl, serveStaticUrl} from './lib/server.js';
import home from './pages/home.js';
import aboutUs from './pages/aboutUs.js';
import price from './pages/price.js';

const port = process.env.PORT ?? 5000

const routes = {
  '/': home,
  '/about-us': aboutUs,
  '/price' : price,
}

const index = http.createServer((req, res) => {
  const { url } = req;
  if (isStaticUrl(url)) {
    serveStaticUrl(url, res);
  } else {
    serveRouteUrl(routes, url, res, notFound)
  }
})

index.listen(port, () => {
  console.log(`Сервер запущен на хосте http://localhost:${port}`)
})