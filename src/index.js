import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import FavoriteProductCard from './components/favoriteProductCard/favoriteProductCard';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const preloadedState = window.__PRELOADED_STATE__;

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, preloadedState)}>
        <FavoriteProductCard />
    </Provider>,
    document.querySelector('#container'),
);
