import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { createStore } from 'redux';
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

const renderFullPage = (html, preloadedState) => `<!doctype html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">
    <title>Favorite Product Card</title>
</head>
<body>
    <div id="container">${html}</div>
    <script>
    // WARNING: See the following for security issues around embedding JSON in HTML:
    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="/js/main.bundle.js"></script>
</body>
</html>
`;

app.get('/', (req, res) => {
    console.log('getting index page');
    const store = createStore(reducers);

    const html = renderToString(
        <Provider store={store}>
            <FavoriteProductCard />
        </Provider>);

    const preloadedState = store.getState();

    return res.send(renderFullPage(html, preloadedState));
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
