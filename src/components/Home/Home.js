import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/image1.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image4 from '../../assets/images/image4.jpg';


import './Home.css';

function Home() {
    return (
        <>
        <div className='home-carousel'>
           
            <Carousel interval={4000}>
                <Carousel.Item>
                    <img className='d-block w-100'  src={Image1} alt='First slide' />
                    <Carousel.Caption id='text'>
                        <h3>yummy Town This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100 align-items-center' src={Image2} alt='Second slide' />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='d-block w-100'  src={Image4} alt='Third slide' />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
           
        </div>
        
         </>
    );
}

export default Home;
