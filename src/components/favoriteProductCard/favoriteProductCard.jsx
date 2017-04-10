import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFavoriteProducts, fetchSimilarProducts } from '../../actions';

import FavoriteProduct from './favoriteProduct';
import SimilarProducts from './similarProducts';

const propTypes = {
    fetchFavoriteProducts: React.PropTypes.func.isRequired,
    favoriteProduct: React.PropTypes.object.isRequired,
};

class FavoriteProductCard extends Component {
    componentWillMount() {
        this.props.fetchFavoriteProducts('main');
    }

    render() {
        const { product, reviewer } = this.props.favoriteProduct;

        if (product && reviewer) {
            return (
                <div id="favoriteProductCard">
                    <FavoriteProduct product={product} reviewer={reviewer} />
                    <SimilarProducts productId={product.id} />
                </div>
            );
        }

        return (<div>Loading...</div>);
    }
}

FavoriteProductCard.propTypes = propTypes;

function mapStateToProps(state) {
    return { favoriteProduct: state.favoriteProduct, similarProducts: state.similarProducts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchFavoriteProducts, fetchSimilarProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProductCard);
