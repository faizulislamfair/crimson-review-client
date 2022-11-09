import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner"
                        src="one.webp"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner"
                        src="two.webp"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid banner"
                        src="three.webp"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;