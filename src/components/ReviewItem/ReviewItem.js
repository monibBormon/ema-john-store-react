import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product
    const { handleRemove } = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => handleRemove(key)} className='btn'>Remove</button>
        </div>
    );
};

export default ReviewItem;