import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import './Home.css';
import Slider from './../Slider/Slider';
import Service from './../Service/Service';
import Vehicles from './../Vehicles/Vehicles';
import Contact from './../Contact/Contact';

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div className='mt-5'>
                <h3>Services</h3>

                <div className="container">
                    <div className="cards">
                        {
                            services.map(service => <Service key={service._id} service={service}></Service>)
                        }
                    </div>
                </div>


            </div>

            <Link to='/services'><button className='btn btn-success'><h5>See All Services</h5></button></Link>

            <Vehicles></Vehicles>

            <Contact></Contact>

        </div >
    );
};

export default Home;