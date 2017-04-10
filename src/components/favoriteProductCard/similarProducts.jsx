import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSimilarProducts } from '../../actions';

const propTypes = {
    fetchSimilarProducts: React.PropTypes.func.isRequired,
    productId: React.PropTypes.number.isRequired,
    products: React.PropTypes.array.isRequired,
};

const renderList = productList => productList.map(product => <li key={product.id}>{ product.name }</li>);

class SimilarProducts extends Component {
    componentWillMount() {
        this.props.fetchSimilarProducts(this.props.productId);
    }

    render() {
        const { products } = this.props;
        return <ul>{ renderList(products) }</ul>;
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
