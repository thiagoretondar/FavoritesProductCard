import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSimilarProducts } from '../../actions';

import { sliceTextTo40Chars } from '../../../helpers/string';

const propTypes = {
    fetchSimilarProducts: React.PropTypes.func.isRequired,
    productId: React.PropTypes.number.isRequired,
    products: React.PropTypes.array.isRequired,
};

const renderList = productList => productList.map(product =>
    <li key={product.id}>
        <a href={product.link} className="similarProduct-image">
            <img src={product.image} alt={product.name} />
        </a>
        <a href={product.link} className="similarProduct-name">
            <span>{ sliceTextTo40Chars(product.name) }</span>
        </a>
        <a href={product.link} className="similarProduct-price">
            <span>R$ { product.price }</span>
        </a>
    </li>);

class SimilarProducts extends Component {
    componentWillMount() {
        this.props.fetchSimilarProducts(this.props.productId);
    }

    render() {
        const { products } = this.props;
        return (
            <div className="similarProducts">
                <h3>PRODUTOS SIMILARES</h3>
                <ul>{ renderList(products) }</ul>
            </div>
        );
    }
}

SimilarProducts.propTypes = propTypes;

function mapStateToProps(state) {
    return { products: state.similarProducts };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSimilarProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarProducts);
