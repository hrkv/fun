import express from 'express';
import renderApp from './render';
import path from 'path';

const app = express();
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use('/', renderApp);
app.listen(3000, () => console.log('start on 3000 port'));