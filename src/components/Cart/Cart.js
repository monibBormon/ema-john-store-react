import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    /* const total = 0;
    for(const product of cart){
        total = total + product.price
    } */
    // const total = cart.reduce((previous, current) => previous + current.price, 0);
    const totalReducer = (previous, current) => previous + current.price;
    const total = cart.reduce(totalReducer, 0)
    const shipping = 20
    const tax = (total + shipping) * 10 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h4>Items orderded: {cart.length} </h4>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>Items Cost:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping Cost:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Tax:</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr style={{ color: 'chocolate' }}>
                        <td><h4>Order Total:</h4></td>
                        <td><h4>${grandTotal.toFixed(2)}</h4></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn">Place Your order</button>
        </div>
    );
};

export default Cart;