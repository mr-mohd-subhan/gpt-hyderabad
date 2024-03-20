import React, { useEffect } from 'react';
import './Links.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Links = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="links" data-aos="fade-up">
            <h1>Important Links</h1>
            <div className='imp-links'>
                <Link to="https://www.sbtet.telangana.gov.in/index.html#!/index">TS Sbtet</Link>
                <Link to="https://www.sbtet.telangana.gov.in/index.html#!/index/StudentAttendance">Student Attendance</Link>
                <Link to="https://www.sbtet.telangana.gov.in/index.html#!/index/DiplomaStudentResult">Diploma results</Link>
                <Link to="https://www.sbtet.telangana.gov.in/index.html#!/index/DiplomaHallticket">Download Hall Ticket</Link>
                <Link to="https://www.sbtet.telangana.gov.in/index.html#!/index/DiplomaFeePayment">Pay Examination Fees</Link>
                <Link to="https://www.sbtet.telangana.gov.in/index.html#!/index/StudentFeedback">Student Feedback</Link>
                <Link to="https://indiancc.nic.in/">NCC</Link>
                <Link to="https://nss.gov.in/">NSS</Link>
            </div>
        </div>
    );
}

export default Links; 