import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const Service = ({ service }) => {
    const { _id, name, image, price, description } = service;


    return (
        <div className='service'>

            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} className="card-img-top img-fluid" alt="Service_Image" />
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h3 className="card-title"><b>Name:</b> {name}</h3>
                <h3 className="card-text"><b>Price:</b> {price}</h3>
                <h3 className="card-text ">

                    <b>Description:</b>
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'}
                            </>
                            :
                            <>{description}</>
                    }

                </h3>
                <Link to={`/service/${_id}`}><button className='btn btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Service;