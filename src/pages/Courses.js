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


const Courses = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="courses">
            <p>Government polytechnics offer a diverse array of courses aimed at enhancing the skills and expertise of students across various fields. These institutions serve as hubs for practical, hands-on learning, providing invaluable training in areas such as engineering, technology, computer science, and more. Through comprehensive curricula and state-of-the-art facilities, government polytechnics empower students to acquire industry-relevant skills, fostering their professional development and preparing them for the challenges of the modern workforce. With a focus on practical application and real-world problem-solving, these institutions play a vital role in equipping individuals with the knowledge and proficiency needed to thrive in today's competitive job market.</p>

            <div className="branches">
                <Card
                    imgurl={cse}
                    title="Computer Science and Engineering"
                    route={'/courses/cse'}
                    animStyle="slide-right"
                />
                <Card
                    imgurl={civil}
                    title="Civil Engineering"
                    route={'/courses/ce'}
                    animStyle="fade"
                />
                <Card
                    imgurl={eee}
                    title="Electrical and Electronics Engineering"
                    route={'/courses/eee'}
                    animStyle="slide-left"
                />
                <Card
                    imgurl={ece}
                    title="Electronics and Communication Engineering"
                    route={'/courses/ece'}
                    animStyle="fade-up"
                />
                <Card
                    imgurl={automobile}
                    title="Automobile Engineering"
                    route={'/courses/au'}
                />
                <Card
                    imgurl={mechanical}
                    title="Mechanical Engineering"
                    route={'/courses/me'}
                    animStyle="fade-up-right"
                />
                <Card
                    imgurl={pharmacy}
                    title="Pharmacy"
                    route={'/courses/ph'}
                    animStyle="fade-down"
                />
            </div>
        </div>
    )
}

export default Courses;