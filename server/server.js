import express from 'express';
import bodyParser from 'body-parser';

import user123Mock from '../mocks/favoriteProductCard/user123';
import similarProduct610472 from '../mocks/favoriteProductCard/similarProduct610472';

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

app.get('/favorites/similars/products/:productId', (req, res) => {
    console.log(`getting similars product to ${req.params.productId}`);
    res.json(similarProduct610472);
});

app.listen(PORT, () => {
    console.log(`==> 🌎  Listening on port ${PORT}.`);
});
