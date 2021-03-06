import React from 'react';
import HeroSearch from './heroSearch';

const Hero = () => {
    return (
        <>
            <div className="m_display_image" style={{ background: "url(Resources/Images//BG.jpg)" }}>
                <div className="splash_content">
                    <h1>Unsplash</h1>
                    <p>The internet’s source of freely-usable images.</p>
                    <p>Powered by creators everywhere.</p>

                    <HeroSearch />


                    {/* <!-- search dropdown  --> */}
                    

                    <ul>
                        <li><strong>Trading: </strong></li>
                        <li> <a href="a">flower</a>,</li>
                        <li><a href="a">walpaper</a>,</li>
                        <li><a href="a">background</a>,</li>
                        <li><a href="a">love</a></li>
                        

                    </ul>

                </div>
            </div>
        </>
    );
}

export default Hero;