import http from 'http';
import notFound from './pages/notFound.js';
import {isStaticUrl, serveRouteUrl, serveStaticUrl} from './lib/server.js';
import home from './pages/home.js';
import aboutUs from './pages/aboutUs.js';

const port = 5000

const routes = {
  '/': home,
  '/about-us': aboutUs,
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