import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='restaurant-image'>
            </div>
            <div>
                <h1 id='res-name'>SAVORY</h1>
                <p className='res-intro'>Authentic Italian Cuisine in the Heart of the City</p>
                <button className='menu-btn'>View Menu</button>
            </div>
        </section>
    )
}

export default Hero
