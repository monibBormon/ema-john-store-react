import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { useHistory } from 'react-router-dom';
import './Shipping.css'
import { clearTheCart } from '../../utilities/fakedb';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => { console.log(data) };

    //clear the cart
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)
    const history = useHistory()
    const handleConfirm = () => {
        setCart([])
        clearTheCart()
        history.push('/placeorder')
    }
    return (
        <div>
            <h2>Fill up your Shipping Information</h2>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Your Name' defaultValue={user.displayName} {...register("name")} />
                <input placeholder='Your Email' defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder='Your Address' defaultValue='' {...register("address")} />
                <input placeholder='Your Phone Number' defaultValue='' {...register("phone")} />
                <input placeholder='City' defaultValue='' {...register("city")} />

                {errors.email && <span className='error'>This field is required</span>}
                {errors.address && <span className='error'>address field is required</span>}
                {errors.phone && <span className='error'>phone number is required</span>}
                <button className='btn' onClick={handleConfirm}>Confirm Order</button>
            </form>
        </div>
    );
};

export default Shipping;