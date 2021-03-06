import { FETCH_SIMILAR_PRODUCTS } from '../actions';

const INITIAL_STATE = [];
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_SIMILAR_PRODUCTS:
        return [...state, ...action.payload.data];
    default:
        return state;
    }
}
