import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import './Home.css';
import Slider from './../Slider/Slider';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div className='mt-5'>
                <h3>Services</h3>
                {
                    services.map(service => <p key={service._id}>
                        {service.name}
                    </p>)
                }
            </div>

            <Link to='/services'><button>See All</button></Link>

        </div>
    );
};

export default Home;