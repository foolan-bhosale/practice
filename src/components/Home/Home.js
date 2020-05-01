import React from 'react';

import recipe from '../../assets/images/recipe.jpg';

import './Home.css';

function Home() {
    return (
        <div className='home-carousel'>
            <div className='card bg-dark text-white'>
                <img src={recipe} className='card-img' alt='recipe-img' height={'500px'} />
                <div className='card-img-overlay'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This
                        content is a little bit longer.
                    </p>
                    <p className='card-text'>Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
