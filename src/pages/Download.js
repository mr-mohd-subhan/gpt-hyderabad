import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Courses.css';
import cse from '../assets/cse.jpg';
import automobile from '../assets/automobile.jpg';
import civil from '../assets/civil.jpg';
import ece from '../assets/ece.png';
import eee from '../assets/eee.jpg';
import mechanical from '../assets/mechanical.png';
import pharmacy from '../assets/pharmacy.png';
import Card from '../components/Card';
import './Download.css';


const Download = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="courses">
            <h1 className='download-head'>Select Branch</h1>
            <div className="branches">
                <Card
                    imgurl={cse}
                    title="Computer Science and Engineering"
                    route={'/courses/cse'}
                    style="fade-right"
                />
                <Card
                    imgurl={civil}
                    title="Civil Engineering"
                    route={'/courses/ce'}
                    style="zoom-in"
                />
                <Card
                    imgurl={eee}
                    title="Electrical and Electronics Engineering"
                    route={'/courses/eee'}
                    style="fade-left"
                />
                <Card
                    imgurl={ece}
                    title="Electronics and Communication Engineering"
                    route={'/courses/ece'}
                    style="flip-right"
                />
                <Card
                    imgurl={automobile}
                    title="Automobile Engineering"
                    route={'/courses/au'}
                // style="zoom-out"
                />
                <Card
                    imgurl={mechanical}
                    title="Mechanical Engineering"
                    route={'/courses/me'}
                    style="flip-left"
                />

            </div>
        </div>
    )
}

export default Download;