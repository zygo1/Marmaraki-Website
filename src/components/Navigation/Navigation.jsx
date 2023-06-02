import './Navigation.css';
import meteora_black from '../../assets/meteora-black.png';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // Handle responsive navigation side bar
    const [isActive, setIsActive] = useState(false);
    const linkRef = useRef(null);

    const handleNavBarClick = (e) => {
        if (linkRef.current && !linkRef.current.contains(e.target)) {
            setIsActive(false);
        };
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleScroll = () => {
        setIsActive(false);
    };

    useEffect(() => {
        window.addEventListener('click', handleNavBarClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleNavBarClick);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Reset the navbar to its initial position every time that media queries occurs
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 850px)');

        const handleMediaQueryChange = () => {
            const header = navRef.current; // header navbar
            header.style.transform = "translateY(0px)";
            setIsActive(false);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };

    }, [])

    // Hide navbar while scrolling down and show it again when scrolling up
    const navRef = useRef(null);

    useEffect(() => {
        // init the prevScrollPos
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            // init the currentScrollPos 
            const currentScrollPos = window.scrollY;
            const header = navRef.current;

            if (!header) {
                return;
            };

            // Check if media query is applied
            const mediaQuery = window.matchMedia('(max-width: 850px)');

            if (mediaQuery.matches) {
                return; // just skip the transformations if media query is applied
            };

            // check if the user scrolls down or up
            if (prevScrollPos > currentScrollPos) {
                header.style.transform = "translateY(0px)";
                // console.log(`prevScrollPos: ${prevScrollPos}, currentScrollPos: ${currentScrollPos}`)
            } else if (prevScrollPos <= currentScrollPos) {
                header.style.transform = "translateY(-200px)";

            };

            // update the prevScrollPos
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <header className='header-section' ref={navRef}>
                <nav className='navigationBar'  >
                    <div className='image-brandname'>
                        <img src={meteora_black} alt='Meteora' />
                        <Link to='/' className='brand-name'>Marmaraki</Link>
                    </div>
                    <span ref={linkRef} onClick={handleToggle} className="material-symbols-outlined menu visible">Menu</span>
                    <ul className={`navLinks ${isActive ? 'active' : ''}`} >
                        <li>
                            <Link to='/monasteries'>Monasteries</Link>
                        </li>
                        <li>
                            <Link to='/activities'>Explore</Link>
                        </li>
                        {/* <li>
                    <Link to='/restaurants'>Restaurants</Link>
                </li> */}
                        <li>
                            <Link to='/help'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={`blur-background ${isActive ? "active" : ""}`}></div>
        </>
    );
};


export default Navigation;