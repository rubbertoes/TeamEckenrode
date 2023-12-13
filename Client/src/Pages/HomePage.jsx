import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay the transition a bit after the component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    // Function to return the appropriate class name
    const getClassName = (baseClass, hiddenClass) => {
        return isVisible ? `${baseClass} show` : `${baseClass} ${hiddenClass}`;
    };

    return (
        <>
            <section className={getClassName("special", "hidden")}>
                <h1 className="Homeoftxt">Home of the Independent Trainer</h1>
            </section>

            <div className={getClassName("homeinfodiv", "hidden")}>
                <section>
                    <p className="homeinfo">Over 20,0000 square feet of facility</p>
                    <p className="homeinfo">Cardiovascular, Strength Equipment, Large Functional/Sport Specific Training, 1/2 Floor Indoor Basketball Court, Powerlifting/ Olympic Lifting Platform, Stretching Stations, and More...</p>
                    <Link to="/GymGallery">
                        <button className="viewgallery">View Gym Gallery</button>
                    </Link>
                </section>
            </div>

            <div className={getClassName("homeinfodiv2", "hidden2")}>
                <section>
                    <p className="homeinfo">For over 35+ years, Team Eckenrode has been a hub for fitness entrepreneurs that lead the Training industry</p>
                    <Link to="#">
                        <button className="viewtrainers">View Personal Trainers</button>
                    </Link>
                </section>
            </div>

            <div className={getClassName("homeinfodiv", "hidden")}>
                <section>
                    <p className="homeinfo">Experience the feel of family owned small business and become a member today</p>
                    <Link to="#">
                        <button className="viewmembershipsbutton">View Memberships</button>
                    </Link>
                </section>
            </div>

            <div className={getClassName("homeinfodiv2", "hidden2")}>
                <section>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?...2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
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
