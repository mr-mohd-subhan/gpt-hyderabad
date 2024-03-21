import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ContactUs.css';
import email from '../assets/email.png';
import phone from '../assets/phone.png';
import website from '../assets/website.png';

const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="contactus" data-aos="fade-up">
            <div className="item">
                <img className="email contact-logo" src={email} alt="" />
                <h3>gpthyd01@gmail.com</h3>
            </div>

            <div className="item">
                <img className="website contact-logo" src={website} alt="" />
                <h3>WWW.HYDERABADGOVTPOLY.NIC.IN</h3>
            </div>

            <div className="item">
                <img className="phone contact-logo" src={phone} alt="" />
                <h3>+9104023393246</h3>
            </div>
        </div>
    )
}

export default ContactUs;