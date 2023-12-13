import React from 'react';
import Facility1 from '../assets/Images/Facility1.jpg';
import Facility2 from '../assets/Images/Facility2.jpg';
import Facility3 from '../assets/Images/Facility3.jpg';
import Facility4 from '../assets/Images/Facility4.jpg';
import Facility5 from '../assets/Images/Facility5.jpg';
import Facility6 from '../assets/Images/Facility6.jpg';
import Facility7 from '../assets/Images/Facility7.jpg';

const GymGalleryPage = () => {
    return (
        <>
            <h1 className="head">Gym Gallery</h1>

            <div className="gallerybox">
                <img className="galleryimgs" src={Facility1} alt="Facility 1" />
                <img className="galleryimgs" src={Facility2} alt="Facility 2" />
                <img className="galleryimgs" src={Facility3} alt="Facility 3" />
                <img className="galleryimgs" src={Facility4} alt="Facility 4" />
                <img className="galleryimgs" src={Facility5} alt="Facility 5" />
                <img className="galleryimgs" src={Facility6} alt="Facility 6" />
                <img className="galleryimgs" src={Facility7} alt="Facility 7" />
            </div>
        </>
    );
}

export default GymGalleryPage;
