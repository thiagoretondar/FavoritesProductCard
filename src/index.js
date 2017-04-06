import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import FavoriteProductCard from './components/favoriteProductCard/favoriteProductCard';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <FavoriteProductCard />
    </Provider>,
    document.querySelector('#container'),
);
