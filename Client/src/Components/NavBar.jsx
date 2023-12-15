import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Images/Logo.png'; // Adjust the path to your logo image

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleToggleClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header>
            <div className="banner">
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/membership">Membership</Link></li>
                    <li><Link to="/personaltrainers">Independent Personal Trainers</Link></li>
                    <li><Link to="/about">About/Contact</Link></li>
                    <div className="action_btn">
                        <Link to="/membership">Join Now</Link>
                    </div>
                </div>

                <Link to="/membership" className="action_btn">Join Now</Link>
            </nav>
            <hr className="hrtop" />
        </header>

    );
}

export default Navbar;
