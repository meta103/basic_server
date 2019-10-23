import * as express from 'express';
import { Application } from 'express';

import * as https from 'https';
import * as fs from 'fs';

import { initRestApi } from './api/api';
import { apiErrorHandler } from './api/apiErrorHandler';

const bodyParser = require('body-parser');

const app: Application = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, OPTIONS, PUT, POST, DELETE, PATCH'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Authorization'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  // intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    // respond with 200
    res.sendStatus(200);
  } else {
    // move on
    next();
  }
});
app.use(bodyParser.json());

const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: false },
];

const options = commandLineArgs(optionDefinitions);

initRestApi(app);

app.use(apiErrorHandler);

// app.listen(3000, () => {
//   console.log('Server is now running on port 3000...');
// });

if (options.secure) {

  const httpsServer = https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
  }, app);

  // launch an HTTPS Server. Note: this does NOT mean that the application is secure
  httpsServer.listen(9000, '192.168.1.128', () => console.log('HTTPS Secure Server running at https://localhost:' + httpsServer.address().port));

} else {

  // launch an HTTP Server
  // const httpServer = app.listen(9000, () => {
  //     console.log('HTTP Server running at https://localhost:' + httpServer.address().port);
  // });

  // Debug purposes
  const httpsServer = https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
  }, app);

  // launch an HTTPS Server. Note: this does NOT mean that the application is secure
  httpsServer.listen(9000, '192.168.1.128', () => console.log('HTTPS Secure Server running at https://'+ httpsServer.address().address + ':' + httpsServer.address().port));

}