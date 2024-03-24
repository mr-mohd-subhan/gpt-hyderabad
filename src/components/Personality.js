import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Personality.css';

const Personality = ({ imageurl, pname, text, animStyle }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className='personality' data-aos={animStyle}>
            <img src={imageurl} alt="" className='personality-img' />
            <h3>{pname}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Personality;