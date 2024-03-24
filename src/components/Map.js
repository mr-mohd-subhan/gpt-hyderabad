import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Map.css';

const Map = ({ mapLink, mapImg, className }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (

        <div className={`map ${className}`} data-aos="fade">
            <iframe src={mapLink} title='map'></iframe>
            <img alt="College" src={mapImg} />
        </div>
    )
}

export default Map;