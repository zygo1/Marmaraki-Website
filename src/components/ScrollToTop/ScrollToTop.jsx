import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    // handle scroll in orde to show the button when the user scrolls for over 100
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // handle the button click 
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {visible ?
                <>
                    <button className="scroll-to-top" onClick={handleScrollToTop}></button>
                    <span className="material-symbols-outlined arrow" onClick={handleScrollToTop}>keyboard_arrow_up</span>
                </>
                : null}
        </>
    )

};

export default ScrollToTop;