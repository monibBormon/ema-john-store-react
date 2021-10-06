import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product
    const { handleRemove } = props;
    return (
        <div className='review-item'>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(key)} className='btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;