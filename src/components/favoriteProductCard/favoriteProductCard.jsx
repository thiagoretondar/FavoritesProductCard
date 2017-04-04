import React, { Component } from 'react';
import { connect } from 'react-redux';

import userMock from '../../../mocks/favoriteProductCard/user123';
import FavoriteProduct from './favoriteProduct';

class FavoriteProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = userMock;
    }

    render() {
        const { product, reviewer } = this.state;
        return (
            <div id="favoriteProductCard">
                <FavoriteProduct product={product} reviewer={reviewer} />
            </div>
        );
    }
}

export default connect()(FavoriteProductCard);
