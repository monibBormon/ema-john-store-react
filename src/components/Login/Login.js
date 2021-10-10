import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation()
    const redirect_url = location.state?.from || '/shop'
    const history = useHistory()
    // user login confirmation
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder='Your email' /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" /><br />
                    <button type='submit' className="btn">Login</button>
                </form>
                <p>New to ema-john? <Link to='/register'>Create a free account</Link></p>
                <div style={{ textAlign: 'center' }}>
                    <h2>Or</h2>
                    <button className='btn' onClick={handleGoogleLogin}>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;