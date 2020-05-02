import React from 'react';

import home from '../../assets/images/home.jpeg';

import './Home.css';

function Home() {
    return (
        <div className='container'>
            <div className='container col-12'>
                <img src={home} alt='image' className='img-fluid h-auto' />
                <div className='position-absolute card-img-overlay'>
                    <p className='text-white text-center'>
                        What is the recipe for successful achievement? Choose a career you love. Give it the best there
                        is in you. Seize your opportunities. And be a member of the team.<br />
                        <strong className='text-info'>-Benjamin Franklin</strong>
                    </p>
                </div>
            </div>
            <div className='col-md-12 mt-5'>
                <h1 className='text-center'>Our Recipes, Our Lives</h1>
            </div>
        </div>
    );
}

export default Home;
