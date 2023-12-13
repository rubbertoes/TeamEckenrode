import React from 'react';

const AboutContactPage = () => {
    return (
        <>
            <h1 className="head">About/Contact</h1>

            <div className="videobox">
                <iframe
                    className="videoabout"
                    src="https://www.youtube.com/embed/d8r9sV5jZqg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>

            <div className="about_footer">
                <p>
                    <strong> Front Desk Cell: </strong>
                    <p className="phonenumber"> (301)-230-9393 </p>
                    <br />
                    <strong>Address:</strong>
                    <p className="phonenumber"> 4961 Nicholson Court <br /> Kensington, MD 20895 </p>
                </p>
            </div>
        </>
    );
}

export default AboutContactPage;
