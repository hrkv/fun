import path from 'path';
import express from 'express';

import renderApp from './render';

const app = express();

app.use('/static', express.static(path.join(__dirname, '../static')));
app.use('/', renderApp);

app.listen(3000, () => console.log('start on 3000 port'));