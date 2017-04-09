import axios from 'axios';
import userMock from '../../mocks/favoriteProductCard/user123';

export const FETCH_FAVORITE_PRODUCTS = 'FETCH_FAVORITE_PRODUCTS';
export const FETCH_SIMILAR_PRODUCTS = 'FETCH_SIMILAR_PRODUCTS';

export function fetchFavoriteProducts() {
    return {
        type: FETCH_FAVORITE_PRODUCTS,
        payload: userMock,
    };
}

export function fetchSimilarProducts(productId) {
    const request = axios.get(`/favorites/similars/products/${productId}`);

    return {
        type: FETCH_SIMILAR_PRODUCTS,
        payload: request,
    };
}
