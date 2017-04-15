import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import reducers from '../src/reducers';

import FavoriteProductCard from '../src/components/favoriteProductCard/favoriteProductCard';

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

    const favoriteResponse = user123Mock;

    const store = createStore(reducers, { favoriteProduct: favoriteResponse }, applyMiddleware(ReduxPromise));

    const html = renderToString(
        <Provider store={store}>
            <FavoriteProductCard />
        </Provider>);

    const preloadedState = JSON.stringify(store.getState());

    return res.render('index', { html, preloadedState });
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
