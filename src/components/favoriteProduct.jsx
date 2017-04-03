import React, { Component } from 'react';
import userMock from '../../mocks/favorites/user123';

class FavoriteProduct extends Component {

    constructor(props) {
        super(props);

        this.state = userMock;
    }

    render() {
        const { product, reviewer } = this.state;

        return (
            <div className="mainProduct">
                <section className="productPreview">
                    <img
                        alt={product.name}
                        src={product.thumbnails[0]}
                    />
                </section>
                <section className="productInfo">
                    <h3>{product.name}</h3>
                    <span className="productInfoMoreStore">
                        <a href={product.url}>
                            VEJA PREÇOS EM {product.quantityStores} LOJAS
                        </a>
                    </span>

                    <div className="productInfoBestPrice">
                        <h4>Melhor Preço</h4>
                        <a href={product.bestPrice.store.link}>
                            <span className="productInfoInstallments">
                                {product.bestPrice.installment.quantity}x {product.bestPrice.installment.value}
                            </span>
                            <span className="productInfoMinorPrice">
                                R$ {product.bestPrice.value}
                            </span>
                            <span className="productInfoMinorPriceStore">
                                {product.bestPrice.store.name}
                            </span>
                        </a>
                    </div>
                </section>
                <section className="productRandomComment">
                    <div className="productReview">
                        <img
                            src="http://image.buscape.com/material/icons/ic_avatar_review.svg"
                            alt="Reviewer"
                        />
                        <div className="review">
                            <h4>{reviewer.name}</h4>
                            <p>{reviewer.review}</p>
                            <a href="http://www.buscape.com.br/apple-macbook-pro-mf840-intel-core-i5-2-7-ghz-8192-mb-256-gb#avaliacoes">
                                LEIA A AVALIAÇÃO DO CONSUMIDOR
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default FavoriteProduct;
