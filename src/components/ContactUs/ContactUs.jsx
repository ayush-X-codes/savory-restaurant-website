import React from "react";
import "./ContactUs.css";
import { MapPin, Smartphone, Mail } from "lucide-react";
const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="main-heading">Get in Touch</h1>
      <div className="col-container">
        <section className="address-sec col">
          <h2 className="sec-heading">Contact Information</h2>
          <div className="address-box">
            <div className="address">
              <div>
                <MapPin className="icons" />
                <label className="address-label" htmlFor="address">
                  Address
                </label>
              </div>
              <div>
                <p className="label-value"> 123 Main Street</p>
                <p className="label-value"> Downtown, City, 12345</p>
              </div>
            </div>
            <div className="phone">
              <div>
                <Smartphone className="icons" />
                <label className="address-label" htmlFor="phone">
                  Phone
                </label>
              </div>
              <div>

                <p className="label-value"> (555) 123-4567</p>
              </div>
            </div>
            <div className="email">
              <div>
                <Mail className="icons" />
                <label className="address-label" htmlFor="email">
                  Email
                </label>
              </div>
              <div>
                <p className="label-value">hello@savory.com</p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-sec col">
          <h2 className="sec-heading">Send Us a Message</h2>
          <form className="contact-form">
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <input className="contact-input" type="text" required />

            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <input className="contact-input" type="email" required />

            <label className="contact-label" htmlFor="phone">
              Phone
            </label>
            <input className="contact-input" type="tel" required />

            <label className="contact-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="contact-input message-box"
              name="message"
              id="message"
            ></textarea>
            <button className="btn-submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
