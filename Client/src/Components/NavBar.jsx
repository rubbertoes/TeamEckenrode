import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Images/Logo.png'; // Adjust the path to your logo image
import { useAlert } from './AlertContext.jsx';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { alert } = useAlert();
    const alertRef = useRef(null);
    const bannerRef = useRef(null);

    const handleToggleClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Function to close the dropdown
    const handleCloseDropdown = () => {
        setDropdownOpen(false);
    };

    //Function gets alert message and the banner height so that the padding below
    //the alert banner can be dynamically adjusted and the gym logo will initally 
    //be visable above the alert banner
    useEffect(() => {
        if (alert.visible && alertRef.current && bannerRef.current) {
            const alertHeight = alertRef.current.offsetHeight;
            bannerRef.current.style.marginTop = `${alertHeight}px`;
        } else if (bannerRef.current) {
            bannerRef.current.style.marginTop = '0';
        }
    }, [alert]);

    return (
        <header className={alert.visible ? 'with-alert' : ''}>
            {alert.visible && (
                <div className="alert-banner" ref={alertRef}>
                    {alert.message}
                </div>
            )}
            <div className="banner" ref={bannerRef}>
                <div className="bannerbox">
                    <Link to="/">
                        <h1 className="bannertxt">
                            <img className="logopic" src={Logo} alt="Team Eckenrode logo" />
                            Team Eckenrode Gym & Fitness
                        </h1>
                    </Link>
                </div>
            </div>

            <hr className="hrtop" />

            <nav className="navbar">
                <div className="logo">
                </div>

                <ul className={`links ${dropdownOpen ? 'open' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/personaltrainers">Independent Personal Trainers</Link></li>
                    <li><Link to="/about">About/Contact</Link></li>
                </ul>

                <button onClick={handleToggleClick} className="toggle_btn">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className={`dropdown_menu ${dropdownOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={handleCloseDropdown}>Home</Link></li>
                    <li><Link to="/membership" onClick={handleCloseDropdown}>Membership</Link></li>
                    <li><Link to="/personaltrainers" onClick={handleCloseDropdown}>Independent Personal Trainers</Link></li>
                    <li><Link to="/about" onClick={handleCloseDropdown}>About/Contact</Link></li>
                    <div className="action_btn">
                        <Link to="/membership" onClick={handleCloseDropdown}>Join Now</Link>
                    </div>
                </div>

                <Link to="/membership" className="action_btn">Join Now</Link>
            </nav>
            <hr className="hrtop" />
        </header>
    );
}

export default Navbar;
