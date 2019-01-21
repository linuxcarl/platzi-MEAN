import http from 'http';
import { debug } from 'util';
import app from './app';

const port = 3000;
const DEBUG = new debug('platzi-mean:root');
/*
const app = http.createServer((req,res) => {
    debug("new debug");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hola desde el servidor');
  res.end();
});
*/

app.listen(port, () => {
  debug(`Server running at port ${port}`)
})