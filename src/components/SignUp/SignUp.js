import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container-signup'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <br />
                <div className="form-control">
                    <label htmlFor="full name">Full Name</label>
                    <input type="text" name="name" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="photoURL">Photo URL</label>
                    <input type="text" name="photoURL" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <br />
            <p style={{ fontSize: '20px' }}>Already have an account? <Link to='/login'>Login</Link></p>

        </div>
    );
};

export default SignUp;