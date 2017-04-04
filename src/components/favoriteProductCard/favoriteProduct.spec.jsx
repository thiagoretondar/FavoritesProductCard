/* global describe, it, beforeEach */
import React from 'react';
import { shallow, render } from 'enzyme';
import { expect } from 'chai';

import userMock from '../../../mocks/favoriteProductCard/user123';

import FavoriteProduct from './favoriteProduct';

describe('<FavoriteProduct />', () => {
    let userApiResponse;
    beforeEach(() => {
        userApiResponse = userMock;
    });

    it('should render div.mainProduct with three main section', () => {
        // given
        const mainSectionsClassName = ['productPreview', 'productInfo', 'productRandomComment'];

        // when
        const wrapper = shallow(<FavoriteProduct {...userApiResponse} />);

        // then
        mainSectionsClassName.map(sectionClassname => expect(wrapper.find(`section.${sectionClassname}`)).to.have.length(1));
    });

    it('should render installment block when there is installment in props', () => {
        // given
        const blockInstallment = 'span.productInfoInstallments';

        // when
        const wrapper = shallow(<FavoriteProduct {...userApiResponse} />);

        // then
        expect(wrapper.find(blockInstallment)).to.have.length(1);
    });

    it('should not render installment block when there is not installment in props', () => {
        // given
        const blockInstallment = 'span.productInfoInstallments';
        delete userApiResponse.product.bestPrice.installment;

        // when
        const wrapper = shallow(<FavoriteProduct {...userApiResponse} />);

        // then
        expect(wrapper.find(blockInstallment)).to.have.length(0);
    });
});
