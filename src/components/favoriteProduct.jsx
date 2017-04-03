import React from 'react';

const FavoriteProduct = () =>
    <div className="mainProduct">
        <section className="productPreview">
            <img
                alt="Macbook Pro"
                src="http://thumbs.buscape.com.br/notebook/apple-macbook-pro-mf840-intel-core-i5-2-7-ghz-8192-mb-256-gb_300x300-PU950a8_1.jpg"
            />
        </section>
        <section className="productInfo">
            <h3>Apple Macbook Pro MF840 Intel Core i5 2.7 GHz 8192 MB 256 GB</h3>
            <span className="productInfoMoreStore">
                <a href="http://www.buscape.com.br/apple-macbook-pro-mf840-intel-core-i5-2-7-ghz-8192-mb-256-gb">
                    VEJA PREÇOS EM 4 LOJAS
                </a>
            </span>

            <div className="productInfoBestPrice">
                <h4>Melhor Preço</h4>
                <a href="http://www.buscape.com.br/redirect_prod?pagina=1&pos=0&id=6424&prod_id=164955557&emp_id=913308&nc=17230708520170331130201&az=5cafaef32f5dc0f385a17bab5c1136b8&cn=80454264">
                    <span className="productInfoInstallments">
                        12x 615,11
                    </span>
                    <span className="productInfoMinorPrice">
                        R$ 6.221,75
                    </span>
                    <span className="productInfoMinorPriceStore">
                        MasterTronic.com.br
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
                    <h4>
                        Thiago Retondar
                    </h4>
                    <p>
                        esse notebook é exelente, ideal para qualquer atividade,
                        desde as mais simples as mais complexas que envolvem programas...
                    </p>
                    <a href="http://www.buscape.com.br/apple-macbook-pro-mf840-intel-core-i5-2-7-ghz-8192-mb-256-gb#avaliacoes">
                        LEIA A AVALIAÇÃO DO CONSUMIDOR
                    </a>
                </div>
            </div>
        </section>
    </div>;

export default FavoriteProduct;
