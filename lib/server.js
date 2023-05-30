import path from 'path';
import fs from 'fs';

const MIME_TYPES = {
  default: 'application/octet-stream',
  js: 'application/javascript',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml',
};

export const isStaticUrl = (url) => {
  return url.includes('.') // // браузер запросил статический файл с расширением (.png .js .css ...)
}

export const serveStaticUrl = (url, res) => {
  const filePath = `./static${url}`; // ./static/style.css
  const ext = path.extname(filePath).substring(1).toLowerCase(); // css
  const mimeType = MIME_TYPES[ext] ?? MIME_TYPES.default; // text/css

  const stream = fs.createReadStream(filePath);
  res.writeHead(200, {'Content-Type': mimeType});
  stream.pipe(res);
}

export const serveRouteUrl = (routes, url, res, notFound) => {
  let [route, params] = url.split('?') // /?search=Helloqweqw
  params = new URLSearchParams(params)

  const routeFunction = routes[route] ?? notFound;
  const result = routeFunction(params);

  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.write(result)
  res.end()
}