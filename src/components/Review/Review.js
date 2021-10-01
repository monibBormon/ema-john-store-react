import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)
    const history = useHistory()

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/placeorder')
        setCart([])
        clearTheCart();
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem key={product.key} handleRemove={handleRemove} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;