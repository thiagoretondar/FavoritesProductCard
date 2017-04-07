import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFavoriteProducts } from '../../actions';

import FavoriteProduct from './favoriteProduct';

class FavoriteProductCard extends Component {
    componentWillMount() {
        this.props.fetchFavoriteProducts('main');
    }

    render() {
        const { product, reviewer } = this.props.favoriteProduct;

        if (product && reviewer) {
            return (
                <div id="favoriteProductCard">
                    <button onClick={() => this.props.fetchFavoriteProducts()}>Next</button>
                    <FavoriteProduct product={product} reviewer={reviewer} />
                </div>
            );
        }

        return (<div>Loading...</div>);
    }
}

function mapStateToProps({ favoriteProduct }) {
    console.log('Mapping state to props', favoriteProduct);
    return { favoriteProduct };
}

function mapDispatchToProps(dispatch) {
    console.log('Binding action to props');
    return bindActionCreators({ fetchFavoriteProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProductCard);
