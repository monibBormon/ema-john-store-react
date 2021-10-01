import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let total = 0;
    let totalQuantity = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity;
    }
    /* const totalReducer = (previous, current) => previous + current.price;
    const total = cart.reduce(totalReducer, 0) */
    /* 
    const total = cart.reduce((previous, current) => previous + (current.price * current.quantity), 0);
    const totalQuantity = cart.reduce((previous, current) => previous + current.quantity, 0) */
    const shipping = total > 0 ? 15 : 0
    const tax = (total + shipping) * 10 / 100;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h4>Items orderded: {totalQuantity} </h4>
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
            {props.children}
        </div>
    );
};

export default Cart;