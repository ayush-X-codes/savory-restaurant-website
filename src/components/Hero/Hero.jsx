import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='restaurant-image'>
            </div>
            <div>
                <h1 id='res-name'>SAVORY</h1>
                <p className='res-intro'>Authentic Italian Cuisine in the Heart of the City</p>
                 <Link to="/menu">
                    <button className='menu-btn'>View Menu</button>
                </Link>
            </div>
        </section>
    )
}

export default Hero
