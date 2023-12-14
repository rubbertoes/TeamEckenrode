import React from 'react';
import { Link } from 'react-router-dom';

const KevinWhitePage = () => {
    return (
        <>
            <h1 className="biotlt">
                Kevin White
                <Link to="/linkedin-kevin-white">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                </Link>
            </h1>

            <div className="bioboxes">
                <p className="lazobiobox">
                    &bull; Kevin has been in the Personal Training industry for more than 45+ years and is known for his well-rounded knowledge of fitness. He specializes in sports nutrition, athletic training, and tailored weight loss and fitness programs. Kevin likes to keep his programs and training regimens fresh and exciting, so his clients continue to produce results while also enjoying the overall experience.
                    <br /><br />
                    &bull; In addition to Personal Training, Kevin also has 10+ years of experience as a Real-Estate agent & Investor.
                </p>

                <p className="lazobiobox">
                    <strong>Text:</strong> "I'm Interested" to: <br /> (301)-332-2004
                </p>
            </div>
        </>
    );
}

export default KevinWhitePage;
