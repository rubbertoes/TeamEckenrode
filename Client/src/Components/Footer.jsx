import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <footer className="footer">
            <hr />
            <div className="footerlinks">
                <p className="footerbox">
                    <a target="_blank" href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1">
                        Member Sign-in
                    </a>
                </p>
                <p className="footerbox">
                    <Link to="/personaltrainers">Independent Personal Trainers</Link>
                </p>
                <p className="footerbox">
                    <Link to="/gymgallery">Gym Gallery</Link>
                </p>
                <div className="footerbox">
                    <a href="https://www.instagram.com/team.eckenrode/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/teameckenrodegymandfitness/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.youtube.com/@Mission_TeamE" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                </div>
            </div>
            <hr />
            <div className="copywrite">
                <Link to="/">
                    <img className="footerlogo" src={FooterLogo} alt="Team Eckenrode Logo" />
                </Link>
                <h3>&copy; Team Eckenrode Gym and Fitness 2023</h3>
            </div>
        </footer>
    );
}

export default Footer;
