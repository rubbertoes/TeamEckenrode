import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png'; // Adjust the path to where your image is stored

const NavBar = () => {
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

            <nav role="navigation">
                <div className="navbar">
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/membership">Membership</Link></li>
                        <li><Link to="/personaltrainers">Independent Personal Trainers</Link></li>
                        <li><Link to="/about">About/Contact</Link></li>
                    </ul>
                    <Link to="/membership" className="action_btn">Join Now</Link>

                    {/* ... rest of your navbar structure ... */}
                </div>

                {/* ... dropdown menu ... */}
            </nav>

            <hr className="hrtop" />
        </header>
    );
}

export default NavBar;
