import { combineReducers } from 'redux';

import favoriteProductRedcer from './favoriteProductReducer';

const rootReducer = combineReducers({
    favoriteProduct: favoriteProductRedcer,
});

export default rootReducer;
