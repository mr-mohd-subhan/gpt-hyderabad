// About.js

import React from 'react';
import caro3 from '../assets/caro3.jpg'
import './About.css';
import Map from '../components/Map'

const About = () => {
    return (
        <div className="about">
            <p>
                The Government Polytechnic, Masabtank is located at the heart of the city of Hyderabad, Telangana state. This institution is one of the oldest polytechnics in the state and was established in 1923 with disciplines of Electrical & Mechanical. It was Originally named as Osmania Central Technical College and was located in the Mint Compound at Saifabad. In 1931, it was renamed as Osmania Technical College. The institution’s name was changed to Government Polytechnic in 1954 after independence and technical courses were introduced in four branches of study: Automobile, Civil, Electrical and Mechanical. In 1957, a course in the branch of Tele communications (Electronics) was added. The institution was shifted to the present campus at Masabtank in the academic year 1960-61. Subsequently, Diploma in Pharmacy was introduced in 1971-72. Later Diploma in Computers was introduced in 1986-87.
            </p>
            <h1>Location of College</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1744515585465!2d78.45168597438868!3d17.403413702344807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97403c59aefb%3A0x979eb4a9704c45e8!2sGovernment%20Polytechnic%20college!5e0!3m2!1sen!2sin!4v1710694394531!5m2!1sen!2sin"

                mapImg={caro3}

                className="map-about"
            />
            <h2>About College</h2>
            <p>Government Polytechnic, Hyderabad, stands as a beacon of technical education excellence in the heart of the vibrant city of Hyderabad, Telangana. Established in the year 1954 under the aegis of the Department of Technical Education, the institution has been an integral part of the educational landscape for decades. Accredited with the AICTE code 1-451917201, this esteemed institution boasts a sprawling campus located at 10-2-209, Masabtank, Asifnagar Mandal, Hyderabad. Managed by the Government, it operates as a co-educational facility, fostering an inclusive learning environment.

                With its roots tracing back to the Osmania Central Technical College, Government Polytechnic has evolved over the years, continually adapting to meet the changing demands of the technical landscape. The institution offers a wide array of technical courses, including Automobile Engineering, Civil Engineering, Computer Engineering, Electrical and Electronics Engineering, Mechanical Engineering, Pharmacy, and Computer Science.

                Infrastructure-wise, Government Polytechnic boasts a total extent of land spanning 29.16 acres, with a built-up area of 4620 square meters. The campus is equipped with modern amenities, including well-maintained classrooms, laboratories, and workshops tailored to provide hands-on training and practical learning experiences.

                The institution also prioritizes student welfare, offering facilities such as well-maintained toilets, a sick room, and sports and physical education facilities to foster holistic development. With its own building constructed in 1956, Government Polytechnic continues to uphold its commitment to providing quality technical education while nurturing a conducive learning environment for its students.

                Furthermore, Government Polytechnic, Hyderabad, is not just an educational institution; it's a testament to the enduring legacy of technical education in India. With a rich history, a commitment to excellence, and a vision for the future, Government Polytechnic, Hyderabad, remains a cornerstone of technical education in the region.</p>
        </div>
    )
};

export default About; 