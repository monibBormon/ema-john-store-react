import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProducts] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    // get saved items from local storage
    useEffect(() => {
        if (products.length) {
            const savedProduct = getStoredCart()
            const storedCart = []
            for (const key in savedProduct) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedProduct[key]
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)

                }
            }
            setCart(storedCart)
        }
    }, [products])
    const handleAddToCart = product => {
        //if diye cart e check korte hobe then issue solve hoibo
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = []
        if (exists) {
            const remaining = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newCart = [...remaining, product]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        // set cart items to local storage
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
    }
    return (
        <div>
            <div className="search-box">
                <input onChange={handleSearch} type="text" placeholder='search product' />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product handleAddToCart={handleAddToCart} key={product.key} product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className="btn">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;