import React from 'react';

const propTypes = {
    products: React.PropTypes.array.isRequired,
};

const renderList = productList => productList.map(product => <li key={product.id}>{ product.name }</li>);

const SimilarProducts = ({ products }) => <ul>{ renderList(products) }</ul>;
SimilarProducts.propTypes = propTypes;

export default SimilarProducts;
