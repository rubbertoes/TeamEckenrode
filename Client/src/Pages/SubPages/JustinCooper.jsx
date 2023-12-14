import React from 'react';
import { Link } from 'react-router-dom';
import JCoopLogo from '../../assets/Images/CoopLogo.jpg';

const JustinCooperPage = () => {
    return (
        <>
            <h1 className="Watkinstlt">
                Justin Cooper
                <Link to="/instagram" target="_blank" rel="noopener noreferrer">
                    &nbsp;&nbsp;<i className="fa-brands fa-square-instagram fa-xl"></i>
                </Link>
                &nbsp;&nbsp;
                <Link to="/linkedin" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </Link>
                &nbsp;&nbsp;
                <img className="TJClogo" src={JCoopLogo} alt="TJC Performance Logo" />
            </h1>

            <div className="bioboxes">
                <p className="lazobiobox">
                    &bull; Justin Cooper is a Certified Strength and Conditioning Specialist (CSCS) through the National Strength &
                    Conditioning Association (NSCA) who specializes in helping busy professionals and athletes optimize their body
                    composition and functional strength.
                    Before establishing his independent practice, T.J.C. Performance LLC, Justin worked as a personal trainer at
                    several corporate gyms and was a performance coach at a private athletic performance facility. Through these
                    experiences, his passion for the industry was further developed by helping a diverse group of clients including
                    doctors, CEO's, athletes, teachers, and lawyers to develop, execute, and surpass their own unique fitness and
                    performance goals.
                    <br /><br />

                    &bull;Justin believes that setting specific, well-defined goals is essential in maximizing the effectiveness
                    of his programming. His coaching philosophy consists of a process that sets goals to establish the primary focus
                    of each program.
                    Justin helps clients identify and address any problems that have prevented them in the past from achieving their
                    fitness and performance goals
                    and provides guidance to help overcome possible obstacles and ensure success. Through this guided process,
                    clients change their beliefs and in turn,
                    shape behaviors that are more consistent with accomplishing their objectives.
                    <br /><br />

                    &bull;Justin has an extensive educational background, including a <strong> M.S. in Exercise Science and a B.S.
                        in Sport and Exercise Science.</strong>
                    He also pursues continuing education and holds a number of certifications:<br />
                    Strength and Conditioning Specialist (CSCS) National Strength & Conditioning Association (NSCA)
                    Performance Enhancement Specialist (PES) National Academy of Sports Medicine (NASM)
                    Corrective Exercise Specialist (CES) National Academy of Sports Medicine (NASM)
                    Certified Personal Trainer (CPT) National Academy of Sports Medicine (NASM)
                    <br /><br />

                    &bull;Justin also competes in several sports including Wrestling, Mixed Martial Arts (MMA), Bodybuilding, and
                    Powerlifting. Justin has won several Powerlifting competitions
                    through the USAPL and USPA federations and currently holds multiple Maryland state records. He uses his past
                    personal experiences in sports to further connect with clients in providing the guidance necessary to
                    successfully achieve their own objectives.
                    When not preparing for his next competition, Justin enjoys spending time with his family, traveling with his
                    girlfriend, reading, and looking at puppy videos.
                    Justin is now available for coaching and private consultations.
                </p>

                <p className="lazobiobox">
                    You can reach Justin at (301) 741-7870 or justin@tjcperformance.com.
                </p>
            </div>
        </>
    );
}

export default JustinCooperPage;
