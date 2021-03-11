import express from 'express';
import nunjucks from 'nunjucks';
import compression from 'compression';
import dotenv from 'dotenv';
import router from './routes/index.routes';
import fs from 'fs';

dotenv.config();

const port = process.env.PORT || 3000,
  environment = process.env.ENVIRONMENT || 'development',
  urlEncodedParser = express.urlencoded({ extended: true }),
  app = express();

nunjucks
  .configure(['source/views', ...getComponentPaths()], {
    autoescape: true,
    express: app,
  })
  .addGlobal('cssBundle', getCssBundleName());

app
  .use(compression())
  .use(express.json())
  .use(urlEncodedParser)
  .use(express.static('static'))
  .set('view engine', 'html')
  .use('/', router)
  .listen(port, () => console.log(`Using port: ${port}`));

function getComponentPaths() {
  const componentsPath = 'source/components';
  const components = fs.readdirSync(componentsPath);

  const templatePaths = components.map((component) => {
    return `${componentsPath}/${component}/template/`;
  });

  return templatePaths;
}

function getCssBundleName() {
  const cssBundle = fs.readdirSync('static/build/css/');
  return cssBundle[0];
}
