import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/image1.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image3 from '../../assets/images/image3.jpg';
import './Home.css';

function Home() {
    return (
        <Carousel interval={4000}>
            <Carousel.Item>
                <img className='d-block w-100' width={400} height={500} src={Image1} alt='First slide' />
                <Carousel.Caption id='text'>
                    <h3>yummy Town</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' width={400} height={500} src={Image2} alt='Second slide' />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' width={400} height={500} src={Image3} alt='Third slide' />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;
