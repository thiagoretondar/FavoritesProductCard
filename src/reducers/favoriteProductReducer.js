import { FETCH_FAVORITE_PRODUCTS } from '../actions';

const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_FAVORITE_PRODUCTS:
        console.log('Calling FETCH_FAVORITE_PRODUCTS in reducer', action.payload);
        return { ...state, ...action.payload };
    default:
        console.log('Returning default state in reducer');
        return state;
    }
}
