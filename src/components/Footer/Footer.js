import React from 'react';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="container-fluid bg-dark text-white text-center mt-5 py-5">

            <h3>Fair Online Delivery Service Review</h3>

            <p>Dhaka, Bangladesh</p>

            <p>Privacy Policy | Terms of use</p>

            <div className="social-icons">
                <FaFacebook />
                <FaInstagram />
                <FaLinkedin />
            </div>


        </footer>
    );
};

export default Footer;