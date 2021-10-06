import React from 'react';
import img from '../../images/giphy.gif'

const PlaceOrder = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Thanks for your order.</h2>
            <p style={{ fontWeight: 'bold' }}>We will deliver your product asap.</p>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;