const http = require('http');
const app = require('./app');
// create an instance of the http server to handle HTTP request

const port = process.env.PORT || 3000;
//start the server on port 3000
const server = http.createServer(app);

server.listen(port);


