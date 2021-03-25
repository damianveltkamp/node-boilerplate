import express from 'express';
import nunjucks from 'nunjucks';
import compression from 'compression';
import dotenv from 'dotenv';
import router from './routes/index.routes';
import * as defaultHelpers from './helpers/default.helpers';
import { notFound, errorHandler } from './controllers/error.controller';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const urlEncodedParser = express.urlencoded({ extended: true });
const environment = process.env.ENVIRONMENT || 'development';

nunjucks
  .configure(['source/views', ...defaultHelpers.getComponentPaths()], {
    autoescape: true,
    express: app,
  })
  .addGlobal('jsBundle', defaultHelpers.getJsBundleName())
  .addGlobal('cssBundle', defaultHelpers.getCssBundleName());

app
  .use(compression())
  .use(express.static('static'))
  .use(express.json())
  .use(urlEncodedParser)
  .set('view engine', 'html')
  .use('/', router)
  .use(errorHandler)
  .use(notFound)
  .listen(port);
