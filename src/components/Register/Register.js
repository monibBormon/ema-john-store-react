import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
                <h2>Please Register First</h2>
                <form onSubmit="">
                    <input type="text" placeholder='Your Name' /> <br />
                    <input type="email" name="email" id="email" placeholder='Your Email' /><br />
                    <input type="password" name="password" id="password" placeholder='Your Password' /><br />
                    <input type="password" name="password" id="password" placeholder='Re-enter Password' /><br />
                    <button type='submit' className="btn">Register</button>
                </form>
                <p>Already have an account? <Link to='login'>Login</Link></p>
                <div>
                    <h2>Or</h2>
                    <button>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;