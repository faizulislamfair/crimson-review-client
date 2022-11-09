import React, { useContext } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import { AuthContext } from './../../contexts/UserContext';

const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'





    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <br />
            <p style={{ fontSize: '20px' }}>New to <b>Fair Online Delivery Service Review</b>? <Link to='/signup'>Create a New Account</Link></p>

            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;