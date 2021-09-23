import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p><small>By: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Available in stock {stock} items</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;