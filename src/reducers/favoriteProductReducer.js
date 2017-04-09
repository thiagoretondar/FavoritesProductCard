import { FETCH_FAVORITE_PRODUCTS } from '../actions';

const INITIAL_STATE = {};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_FAVORITE_PRODUCTS:
        return { ...state, ...action.payload };
    default:
        return state;
    }
}
