import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
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
            {visible ? <button className="scroll-to-top" onClick={handleScrollToTop}><span class="material-symbols-outlined">keyboard_arrow_up</span>
            </button> : null}
        </>
    )

};

export default ScrollToTop;