import { combineReducers } from 'redux';

import favoriteProductRedcer from './favoriteProductReducer';
import similarProductsReducer from './similarProductsReducer';

const rootReducer = combineReducers({
    favoriteProduct: favoriteProductRedcer,
    similarProducts: similarProductsReducer,
});

export default rootReducer;
