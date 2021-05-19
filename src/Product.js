// Product.js

//import React from 'react';

function Product({ image, title, price, title2}) {
    return (
        <article className="product">
            <img src={image} alt={title} />
            <p className="product-name">
                {title}
            </p>
            <h4 className="product-price">
                {price}
            </h4>
            <span className="product-title2">
                {title2}
            </span>
        </article>
    );
}

export default Product;