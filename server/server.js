import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import user123Mock from '../mocks/favorites/user123';

const PORT = 8081;

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('views', 'public/views');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('getting index page');
    res.render('index');
});

app.get('/favorites/user/:userId', (req, res) => {
    console.log('getting info for ', req.params.userId);
    res.json(user123Mock);
});

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}.`);
});
