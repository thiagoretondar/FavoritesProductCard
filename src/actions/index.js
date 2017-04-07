import userMock from '../../mocks/favoriteProductCard/user123';

export const FETCH_FAVORITE_PRODUCTS = 'FETCH_FAVORITE_PRODUCTS';

export function fetchFavoriteProducts(someParamJustToTest) {
    if (someParamJustToTest === 'main') {
        return {
            type: FETCH_FAVORITE_PRODUCTS,
            payload: userMock,
        };
    }

    userMock.product.name = 'Testing';
    return {
        type: FETCH_FAVORITE_PRODUCTS,
        payload: userMock,
    };
}
