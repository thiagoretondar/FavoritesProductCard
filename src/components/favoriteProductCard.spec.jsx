/* global describe, it */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FavoriteProductCard from './favoriteProductCard';
import FavoriteProduct from './favoriteProduct';

describe('<FavoriteProductCard />', () => {
    it('should render a main div with id #favoriteProductCard', () => {
        // given
        const expectedId = 'favoriteProductCard';

        // when
        const wrapper = shallow(<FavoriteProductCard />);

        // then
        expect(wrapper.props()).to.have.property('id', expectedId);
    });

    it('should contain <FavoriteProduct /> inside main div', () => {
        // given
        const quantityFavoriteProductExpect = 1;

        // when
        const wrapper = shallow(<FavoriteProductCard />);

        // then
        expect(wrapper.find(FavoriteProduct)).to.have.length(quantityFavoriteProductExpect);
    });

    it('should pass correct props for <FavoriteProduct />', () => {
        // given
        const productInitialState = { product: { some: 'property' } };
        const reviewerInitialState = { reviewer: { some: 'property' } };
        const initalState = Object.assign(productInitialState, reviewerInitialState);

        // when
        const wrapper = shallow(<FavoriteProductCard />);
        wrapper.setState(initalState);

        // then
        expect(wrapper.find(FavoriteProduct).props().product).to.be.equal(productInitialState.product);
        expect(wrapper.find(FavoriteProduct).props().reviewer).to.be.equal(reviewerInitialState.reviewer);
    });
});
