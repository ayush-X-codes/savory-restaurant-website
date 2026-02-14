import React from 'react'
import "./Info.css"
const Info = () => {
    return (
        <section className='info-section'>
            <div className='hours-col col'>
                <h1 className='heading'>🗓️Hours</h1>
                <p className='res-info'><strong>Mon - Fri:</strong> 11:00 AM - 10:00 PM</p>
                <p className='res-info'><strong>Sat - Sun:</strong> 10:00 AM - 11:00 PM</p>
            </div>
            <div className='location-col col'>
                <h1 className='heading'>📍Location</h1>
                <p className='res-info'>123 Main Street</p>
                <p className='res-info'>Downtown, City, 12345</p>
                <p className='res-info'><strong>Phone: </strong>(555) 123-4567</p>
                <p className='res-info'><strong>Email: </strong> hello@savory.com</p>
            </div>
        </section>
    )
}

export default Info
