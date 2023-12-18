// Desc: This is the home page for the website. It contains information about the gym and links to other pages.
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <>
            <section className="special">
                <h1 className="Homeoftxt">Home of the Independent Trainer</h1>
            </section>

            <div className="homeinfodiv">
                <section>
                    <p className="homeinfo">Over 20,0000 square feet of facility</p>
                    <p className="homeinfo">Cardiovascular, Strength Equipment, Large Functional/Sport Specific Training, 1/2 Floor Indoor Basketball Court, Powerlifting/ Olympic Lifting Platform, Stretching Stations, and More...</p>
                    <Link to="/GymGallery">
                        <button className="viewgallery">View Gym Gallery</button>
                    </Link>
                </section>
            </div>

            <div className="homeinfodiv2">
                <section>
                    <p className="homeinfo">For over 35+ years, Team Eckenrode has been a hub for fitness entrepreneurs that lead the Training industry</p>
                    <Link to="/personaltrainers">
                        <button className="viewtrainers">View Personal Trainers</button>
                    </Link>
                </section>
            </div>

            <div className="homeinfodiv">
                <section>
                    <p className="homeinfo">Experience the feel of family owned small business and become a member today</p>
                    <Link to="/membership">
                        <button className="viewmembershipsbutton">View Memberships</button>
                    </Link>
                </section>
            </div>

            <div className="homeinfodiv2">
                <section>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.6615451378793!2d-77.10582932389569!3d39.04583567169283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cc2793f448c9%3A0x9f0be7f94f9f8860!2sTeam%20Eckenrode%20Gym%20%26%20Fitness!5e0!3m2!1sen!2sus!4v1702602754358!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>

                    <div className="hrsbox">
                        <h1 className="hrs"><em>Hours:</em></h1>
                        <p className="hoursinfo">
                            Monday 5:30am-8pm<br />
                            Tuesday 5:30am-8pm<br />
                            Wednesday 5:30am-8pm<br />
                            Thursday 5:30am-8pm<br />
                            Friday 5:30am-8pm<br />
                            Saturday 7am-1pm<br />
                            Sunday 10am-2pm<br />
                        </p>
                    </div>

                    <div className="contactinfohome">
                        <strong>Phone Number:</strong>
                        <p className="phonenumberhome">(301)-230-9393</p>
                        <strong>Address:</strong>
                        <p className="phonenumberhome">4961 Nicholson Court<br />Kensington, MD 20895</p>
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomePage;
