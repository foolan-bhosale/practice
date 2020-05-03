import React from 'react';

import recipe from '../../assets/images/toppings.jpg';
import home from '../../assets/images/image2.jpg';
import world from '../../assets/images/world.jpg';
import Footer from '../Footer/Footer';

import './Home.css';

function Home() {
    return (
        <>
        <div className='container'>
            <div className='container col-12'>
                <img src={home} alt='salad' className='img-fluid h-auto' />
                <div className='position-absolute card-img-overlay'>
                    <h1 className='text-center'>Welcome to the YUMMY-TOWN.</h1>
                </div>
            </div>

            <section className='intro'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 col-12 align-self-center mt-5'>
                            <div>
                                <img src={recipe} className='img-fluid' alt='vegetables' />
                            </div>
                        </div>
                        <div className='col-md-6 col-12 mt-5 align-self-center'>
                            <h1 className='text-dark'>Our Recipes,Our Lives</h1>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
            <section className='intro'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mt-5 col-12 align-self-center'>
                            <h1 className='text-dark'>Discover the flavours of the food</h1>
                        </div>
                        <div className='col-md-6 col-12 align-self-center mt-5'>
                            <div>
                                <img src={world} className='img-fluid' alt='ingredients' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
         <Footer />
         </>
    );
}

export default Home;
