import React from 'react';
import './Vehicles.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Vehicles = () => {
    return (
        <div className='container mt-5'>
            <h2>Delivery Vehicles</h2>
            <div className="cards mt-5">



                <div className="card">
                    <PhotoProvider>
                        <PhotoView src='v1.jpg'>
                            <img src='v1.jpg' className="card-img-top img-fluid" alt="Service_Image" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h3 className="card-title">Cycle</h3>
                    </div>
                </div>


                <div className="card">
                    <PhotoProvider>
                        <PhotoView src='v2.jpg'>
                            <img src='v2.jpg' className="card-img-top img-fluid" alt="Service_Image" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h3 className="card-title">Motorcycle</h3>
                    </div>
                </div>



                <div className="card">
                    <PhotoProvider>
                        <PhotoView src='v3.jpg'>
                            <img src='v3.jpg' className="card-img-top img-fluid" alt="Service_Image" />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h3 className="card-title">Truck</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;