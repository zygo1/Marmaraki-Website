import yard from "../../assets/homepage/yard.JPG";
import "./Homepage.css";
// import bed from "../../assets/homepage/bed.JPG";
import towels from "../../assets/homepage/towels.JPG";
import Divider from "../Divider/Divider";
import React from 'react';
import { useState, useEffect } from "react";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Footer from '../Footer/Footer';


const AirbnbEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div class="airbnb-embed-frame" data-id="27454571" data-view="home" >
            <a href="https://www.airbnb.com/rooms/27454571?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a>
            <a href="https://www.airbnb.com/rooms/27454571?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">Home in Kastraki, Trikala · ★4.90 · 2 bedrooms · 3 beds · 1 bath</a>
        </div>
    );
};

const Homepage = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseHover = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const imageContainerStyle = {
        position: 'relative',
        width: '1000px',
        height: '600px',
        maxWidth: "100%"
    };

    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity 0.3s ease-in-out',
        opacity: hovered ? 0 : 1,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const hoverImageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity 0.3s ease-in-out',
        opacity: hovered ? 1 : 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <>
            <section>
                <Divider name="Our place" />
                <div className="landing">
                    <div className="about">
                        <p>The house is located under the picturesque rocks of Meteora, in the beautiful village Kastraki. The area is called Marmaro or Marmaraki, which is where the house gets it's name. The house is close to public transportation, about 200 meters away from the central area of the village. Bakeries, groceries, tavern-restaurants and a drugstore are very close by (about 50-100 meters). The town of Kalambaka is within walking distance. The house is also close to the great monasteries of Meteora.</p>
                    </div>
                    <div className="image" style={imageContainerStyle}>
                        <img
                            style={imageStyle}
                            src={towels}
                            onMouseEnter={handleMouseHover}
                            onMouseLeave={handleMouseLeave}
                            alt="The bedroom"
                        />
                        <img
                            style={hoverImageStyle}
                            src={yard}
                            onMouseEnter={handleMouseHover}
                            onMouseLeave={handleMouseLeave}
                            alt="The yard of the house"
                        />
                    </div>
                </div>
                <Divider name="Location" />
                <div className="directions">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12275.874804379057!2d21.6174356!3d39.7178861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13590f2f9d52a9b1%3A0x53274e5af844a553!2sMarmaraki%20House!5e0!3m2!1sel!2sgr!4v1685107346879!5m2!1sel!2sgr"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        className="directions-map"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div className="directions-text-container">
                        <p>Discover the location of our apartment, nestled amidst the awe-inspiring natural beauty of Meteora and within close proximity to the Monasteries. Explore the enchanting surroundings and immerse yourself in the wonders of this remarkable destination.</p>
                    </div>
                </div>
                <Divider name="View us on Airbnb" />
                <div className="airbnb-section">
                    <div className="airbnb-section-container">Experience the magic of our Airbnb home in Kastraki, Trikala. Book your stay and discover the comforts and beauty we have to offer!</div>
                    <AirbnbEmbed />
                </div>
                <Footer />
            </section>
            <ScrollToTop />
        </>
    )
};

export default Homepage;