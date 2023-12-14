import React from 'react';
import { Link } from 'react-router-dom';

const MaselkaPage = () => {
    return (
        <>
            <h1 className="Watkinstlt">
                Kevin Maselka
                <Link to="/external-link" target="_blank" rel="noopener noreferrer">
                    &nbsp;&nbsp;<i className="fa-brands fa-linkedin fa-xl"></i>
                </Link>

            </h1>

            <div className="bioboxes">
                <p className="lazobiobox">
                    &bull; <strong>Kevin Maselka</strong> (CSCS,CC), owner of Elite Physique, has over 35+ years as a professional trainer and fitness industry leader.
                    <br /><br />
                    &bull; Specializes in the professional athlete. Trained notables <strong>Carmello Anthony, Patrick Ewing, Elton Brand, Alonzo Mourning Lavar Arrington</strong> and an endless list of top performers.
                    <br /><br />
                </p>

                <iframe
                    className="Maselkavideo"
                    src="https://www.youtube.com/embed/tXeFhOd_j-U"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

                <p className="Maselkatxt">
                    <strong>Interviews:</strong> <br />
                    <Link to="/external-link" target="_blank" rel="noopener noreferrer">NBA Trainer tells INSANE Stories About Miami Heat & NBA Stars, Plus Tom Brady and the TB12 Method</Link> <br />
                    <Link to="/external-link" target="_blank" rel="noopener noreferrer">New York Times Article</Link>
                </p>

                <p className="Maselkatxt">
                    <strong>Text:</strong> "I'm Interested" to: <br /> (301)-325-7300 <br /> OR Email me: fitguru1000@aol.com
                </p>
            </div>
        </>
    );
}

export default MaselkaPage;
