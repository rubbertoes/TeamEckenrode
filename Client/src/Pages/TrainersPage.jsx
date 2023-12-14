import React from 'react';
import { Link } from 'react-router-dom';
import JCoop from '../assets/Images/JCoopimg.jpg'
import Loza from '../assets/Images/JoeLozapic.png'
import Maselka from '../assets/Images/Box1image.jpg'
import Medrano from '../assets/Images/Medranoimg.jpg'
import Gene from '../assets/Images/Geneimg.jpg'
import Shulman from '../assets/Images/Shulman-img.jpg'
import Watkins from '../assets/Images/Watkinsimg.jpg'
import KevinWhite from '../assets/Images/KWhiteimg.jpg'

const TrainersPage = () => {
    return (
        <>
            <h1 className="head">Independent Personal Trainers</h1>

            <div className="iptcontainer">
                <div className="Tboxes">
                    <h1 className="Thead">Cooper, <br />Justin</h1>
                    <img className="Timages" src={JCoop} alt="Cooper, Justin" />
                    <Link to="/personaltrainers/JustinCooper"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">Loza,<br />Joe</h1>
                    <img className="Timages" src={Loza} alt="Loza, Joe" />
                    <Link to="/personaltrainers/joeloza"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">Maselka,<br />Kevin</h1>
                    <img className="Timages" src={Maselka} alt="Maselka, Kevin" />
                    <Link to="/personaltrainers/kevinmaselka"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">Medrano,<br />Joe</h1>
                    <img className="Timages" src={Medrano} alt="Medrano, Joe" />
                    <Link to="/personaltrainers/JoeMedrano"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">Mitcheltree,<br />Gene</h1>
                    <img className="Timages" src={Gene} alt="Mitcheltree, Gene" />
                    <Link to="/personaltrainers/GeneMitcheltree"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">Shulman,<br />Rich</h1>
                    <img className="Timages" src={Shulman} alt="Shulman, Rich" />
                    <Link to="/PersonalTrainers/RichShulman"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">Watkins Jr,<br />Robert</h1>
                    <img className="Timages" src={Watkins} alt="Watkins Jr, Robert" />
                    <Link to="/personaltrainers/RobertWatkins"><button className="Viewprofile">View Profile</button></Link>
                </div>

                <div className="Tboxes">
                    <h1 className="Thead">White,<br />Kevin</h1>
                    <img className="Timages" src={KevinWhite} alt="White, Kevin" />
                    <Link to="/personaltrainers/KevinWhite"><button className="Viewprofile">View Profile</button></Link>
                </div>
            </div>
        </>
    );
}

export default TrainersPage;
