import React from 'react'
import "./Footer.css"
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer-wrapper'>
            <div className='footer-content'>
                <section>
                    <p className='fot-heading'>SAVORY</p>
                    <p>Authentic Italian Cuisine</p>

                </section>
                <section>
                    <p className='fot-heading'> Quick Links</p>
                    <Link to="/" className='fot-links'>Home</Link>
                    <Link to="/menu" className='fot-links'>Menu</Link>
                    <Link to="/contact" className='fot-links'>Contact</Link>
                </section>
                <section>
                    <p className='fot-heading'>Contact Info</p>
                    <div className='contact-info-box'>
                        <MapPin size={16} />
                        <p className='contact-info'>123 Main Street, Downtown</p>
                    </div>
                    <div className='contact-info-box'>
                        <Phone size={16} />
                        <p className='contact-info'> (555) 123-4567</p>
                    </div>
                    <div className='contact-info-box'>
                        <Mail size={16} />
                        <p className='contact-info'>hello@savory.com</p>
                    </div>

                </section>
            </div>
            <div className='copyright-wrapper'>
                <p className='copyright'>© 2026 Savory. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
