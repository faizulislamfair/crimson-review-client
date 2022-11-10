import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const service = useLoaderData();


    const { name, image, price, description } = service;

    const [review, setReview] = useState({});


    const { user } = useContext(AuthContext);



    const handleAddReview = event => {
        event.preventDefault();
        console.log(review);


        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Added Successfully');
                    event.target.reset();
                }
            })
    }




    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const name = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;
        const service_name = service.name;
        const newReview = { name, email, photoURL, service_name, ...review }
        newReview[field] = value;
        setReview(newReview);
    }

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service_name=${review?.service_name}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [review?.service_name])

    console.log(reviews);


    return (
        <div className="container">
            <h1 className='mt-5'><u>Service Section</u></h1>
            <div className='text-center detail p-2'>
                <h2><b>Name:</b> {name}</h2>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h3><b>Price:</b> {price}</h3>
                <h3><b>Detailed Description:</b> {description}</h3>
            </div>



            <h1 className='mt-5'><u>Review Section</u></h1>

            {
                reviews.length
            }



            {
                user?.uid ?
                    <>

                        <form className='mt-5' onSubmit={handleAddReview}>

                            <input onBlur={handleInputBlur} type="text" name='review' placeholder='Review' required />
                            <br />
                            <br />
                            <button className='btn btn-primary' type="submit">Add Review</button>
                        </form>
                    </>
                    :
                    <>
                        <h5 className='mt-5'>Please login to add a review</h5>
                        <Link to='/login'><button className='btn btn-primary mt-2'>Login</button></Link>
                    </>


            }

        </div>
    );
};

export default ServiceDetails;