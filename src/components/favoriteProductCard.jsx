import React, { Component } from 'react';

import FavoriteProduct from './favoriteProduct';

class FavoriteProductCard extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div id="favoriteProductCard">
                <FavoriteProduct />
            </div>
        );
    }
}

export default FavoriteProductCard;
