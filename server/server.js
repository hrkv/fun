import path from 'path';
import express from 'express';

import renderApp from './render';

const app = express();

app.use('/bundle', express.static(path.join(__dirname, '../bundle')));
app.use('/', renderApp);

app.listen(3000, () => console.log('start on 3000 port'));