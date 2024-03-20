import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import caro4 from '../assets/caro4.jpg'
import hostel from '../assets/hostel.jpeg'
import places from '../assets/places.jpg'
import events from '../assets/events.png'
import exams from '../assets/exams.jpg';
import future from '../assets/future.jpg';
import download from '../assets/download.webp'
import ContactUs from '../components/ContactUs';
import Links from '../components/Links'

import './Home.css';
import Card from '../components/Card';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className='home'>
            <img className="clgimg" src={caro4} alt="pic" />
            <Links />
            <h1 className="heading">Explore college now!</h1>
            <div className="card-container">
                <Card
                    imgurl={hostel}
                    title="College Hostel"
                    route={"/hostel"}
                    style="fade-right"
                />
                <Card
                    imgurl={places}
                    title="Landmarks"
                    route={"/places"}
                    style="zoom-in"
                />
                <Card
                    imgurl={events}
                    title="Events"
                    route={"/events"}
                    style="fade-left"
                />
                <Card
                    imgurl={download}
                    title="Download resources"
                    route={"/download"}
                    style="flip-right"
                />
                <Card
                    imgurl={exams}
                    title="Exam pattern"
                    route={"/exams"}
                    style="zoom-out"
                />
                <Card
                    imgurl={future}
                    title="Future opportunities"
                    route={"/future"}
                    style="flip-left"
                />
            </div>
            <ContactUs />
        </div>
    )
}

export default Home;
