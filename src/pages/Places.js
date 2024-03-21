import React from 'react';
import './Places.css'
import Map from '../components/Map';
import Mahavir from '../assets/Mahavir.jpg';
import mosque from '../assets/mosque.png';
import hotel from '../assets/hotel.png';
import temple from '../assets/temple.png'
import church from '../assets/church.jpeg'
import falcon from '../assets/falcon.jpeg';
import mathh from '../assets/mathh.jpg';
import ground from '../assets/ground.jpg';


const Places = () => {
    return <div className="places">
        <p>
            Government Polytechnic, Hyderabad, is not just a center for academic excellence but also a hub of convenience and accessibility, with essential facilities and amenities catering to diverse needs within its vicinity. Situated amidst the bustling cityscape of Hyderabad, the institution benefits from its proximity to various essential establishments. Nearby, students and faculty alike have access to hospitals, ensuring prompt medical assistance in times of need. Additionally, the surrounding area hosts places of worship, including mosques, temples, and churches, providing spiritual solace and fostering cultural inclusivity. For those seeking accommodation or dining options, hotels and eateries are conveniently located nearby, offering a range of culinary delights. Moreover, bookstores in the vicinity cater to the academic and recreational reading needs of the community, providing a conducive environment for intellectual growth and exploration. With these amenities in close proximity, Government Polytechnic, Hyderabad, ensures that the holistic needs of its students and staff are met, creating a supportive and enriching educational environment.
        </p>

        <div>
            <h1>1. Hospitals</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1704609301255!2d78.45445827438871!3d17.40360530233929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9741e7abc01f%3A0xe42b0d060c7b4588!2sMahavir%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1710731625855!5m2!1sen!2sin"

                mapImg={Mahavir}
                className="map-places"
            />

            <h1>2. Mosques</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2766646139066!2d78.45429747438861!3d17.398505502486298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e3cb991ec3%3A0xdfcd26374d265303!2sMasjid-e-Alamgiri!5e0!3m2!1sen!2sin!4v1710733916433!5m2!1sen!2sin"

                mapImg={mosque}
                className="map-places"
            />

            <h1>3. Temples</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30457.597619076747!2d78.4140343791016!3d17.402201300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971344afffff%3A0x488e161a1c9ff60b!2sGanesh%20Temple!5e0!3m2!1sen!2sin!4v1710734473920!5m2!1sen!2sin"

                mapImg={temple}
                className="map-places"
            />

            <h1>4. Church</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30457.571031266707!2d78.41403434138087!3d17.402360879274983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9715b6aaaaab%3A0xb5f48641facd4999!2sThe%20Rock%20Church!5e0!3m2!1sen!2sin!4v1710734792974!5m2!1sen!2sin"

                mapImg={church}
                className="map-places"
            />
            <h1>5. Hotels</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1502488680253!2d78.45177087438871!3d17.404575702311277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e3694f117%3A0x35b2e3ec96ec5604!2sEmpala%20Hotel!5e0!3m2!1sen!2sin!4v1710734140145!5m2!1sen!2sin"

                mapImg={hotel}
                className="map-places"
            />
            <h1>5. Book store</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.555616309621!2d78.48272927438826!3d17.385103602872487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99d268bdb28d%3A0xddfd25753d921a31!2sFalcon%20Book%20House%20%26%20Stationery!5e0!3m2!1sen!2sin!4v1710734856934!5m2!1sen!2sin"

                mapImg={falcon}
                className="map-places"
            />
            <h1>6. Ramakrishna math</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0024931570815!2d78.4815366!3d17.411668000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e40fb25841%3A0xce516eeeea1bffc7!2sRamakrishna%20Math!5e0!3m2!1sen!2sin!4v1711031455957!5m2!1sen!2sin"

                mapImg={mathh}
                className="map-places"
            />
            <h1>7. Hockey ground</h1>
            <Map
                mapLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.2014788721344!2d78.45130379999999!3d17.402116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97155c222e01%3A0xe9b8a567cd2f27ef!2sSports%20Coaching%20Foundation!5e0!3m2!1sen!2sin!4v1711031599603!5m2!1sen!2sin"

                mapImg={ground}
                className="map-places"
            />
        </div>

    </div>
}

export default Places;