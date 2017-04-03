/* global describe, it */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import FavoriteProductCard from './favoriteProductCard';

describe('<FavoriteProductCard />', () => {
    it('should render a main div with id #favoriteProductCard', () => {
        // given
        const expectedId = 'favoriteProductCard';

        // when
        const wrapper = shallow(<FavoriteProductCard />);

        // then
        expect(wrapper.props()).to.have.property('id', expectedId);
    });
});
