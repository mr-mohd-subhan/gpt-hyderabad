import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css';
import { Link } from "react-router-dom";

const Card = ({ imgurl, title, route, animStyle }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="card" data-aos={animStyle}>
            <Link to={route}><img src={imgurl} className="card-image" alt="" /></Link>
            <Link to={route}><h3 className="card-title">{title}</h3></Link>
        </div>
    );
}

export default Card;