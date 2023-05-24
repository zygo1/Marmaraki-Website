import yard from ".././assets/homepage/yard.JPG";
import bed from ".././assets/homepage/bed.JPG";
import ".././styles/Homepage.css";
import { useState } from "react";


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
                <div className="landing">
                    <div className="about">
                        <div>The house is located under the picturesque rocks of Meteora, in the beautiful village Kastraki. The area is called Marmaro or Marmaraki, which is where the house gets it's name. The house is close to public transportation, about 200 meters away from the central area of the village. Bakeries, groceries, tavern-restaurants and a drugstore are very close by (about 50-100 meters). The town of Kalambaka is within walking distance. The house is also close to the great monasteries of Meteora.</div>
                    </div>
                    <div className="image" style={imageContainerStyle}>
                        <img
                            style={imageStyle}
                            src={bed}
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
            </section>
        </>
    )
};

export default Homepage;