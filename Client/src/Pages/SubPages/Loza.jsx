import React from 'react';
import { Link } from 'react-router-dom';

const JoeLozaPage = () => {
    return (
        <>
            <div className="lozatltbox">
                <h1 className="biotlt">Joe Loza</h1>
                &nbsp; &nbsp;
                <Link to="/linkedin-joe-loza" target="_blank">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </Link>
            </div>

            <div className="bioboxes">
                <p className="lazobiobox">
                    Joe is a Personal Fitness Specialist with over three decades in the fitness, health, nutrition, and wellness space.
                    Serving both personal and corporate clients. Joe has a proven track record of supporting and guiding clients
                    in achieving their desired goals by tapping into his extensive expertise while incorporating the latest research-backed methods
                    and knowledge to create the ultimate experience.
                    <br /><br />
                    &bull; ISSA Certified Personal Trainer <br />
                    &bull; ISSA Certified Strength & Conditioning <br />
                    &bull; ISSA Certified Fitness Coach <br />
                </p>

                <p className="lazobiobox">
                    <strong>Text:</strong> "I'm Interested" to (301)-233-2791
                </p>
            </div>
        </>
    );
}

export default JoeLozaPage;
