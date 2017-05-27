import React from 'react';
import { connect } from 'react-redux';

import FavoriteProduct from './favoriteProduct';
import SimilarProducts from './similarProducts';

import './style.css';

const propTypes = {
    favoriteProduct: React.PropTypes.object.isRequired,
};

const FavoriteProductCard = ({ favoriteProduct }) => {
    const { product, reviewer } = favoriteProduct;

    return (
        <div id="favoriteProductCard">
            <FavoriteProduct product={product} reviewer={reviewer} />
            <SimilarProducts productId={product.id} />
        </div>
    );
};
FavoriteProductCard.propTypes = propTypes;

function mapStateToProps(state) {
    return { favoriteProduct: state.favoriteProduct };
}

export default connect(mapStateToProps)(FavoriteProductCard);
