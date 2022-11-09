import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);


    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="favicon.webp" style={{ width: '27px', height: '27px', transform: 'translateY(-5px)' }} alt='logo' /><b style={{ fontSize: '21px' }}> Fair Online Delivery Service Review</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0 p-3">
                        <Link className="nav-link text-black" aria-current="page" to="/"><h5>Home</h5></Link>
                        <Link className="nav-link text-black" aria-current="page" to="/services"><h5>Services</h5></Link>
                        <Link className="nav-link text-black" to="/blog"><h5>Blog</h5></Link>
                        {
                            user?.uid ?
                                <Link className="nav-link text-black" onClick={logOut}><h5>Logout</h5></Link>
                                :
                                <>
                                    <Link className="nav-link text-black" to="/login"><h5>Login</h5></Link>
                                    <Link className="nav-link text-black" to='/signup'><h5>Sign Up</h5></Link>

                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;