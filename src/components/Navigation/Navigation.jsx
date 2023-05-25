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
            const header = navRef.current; // hook the header

            if (!header) {
                return;
            };

            // Check if media query is applied
            const mediaQuery = window.matchMedia('(max-width: 850px)');

            if (mediaQuery.matches) {
                return; // skip the transformations if media query is applied
            };

            // check if the user scrolls down or up
            if (prevScrollPos > currentScrollPos) {
                header.style.transform = "translateY(0px)";
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
        <nav className='navigationBar' ref={navRef} >
            <div className='image-brandname'>
                <img src={meteora_black} alt='Meteora' />
                <Link to='/'>Marmaraki</Link>
            </div>
            <span ref={linkRef} onClick={handleToggle} className="material-symbols-outlined menu visible">Menu</span>
            <ul className={`navLinks ${isActive ? 'active' : ''}`} >
                <li>
                    <Link to='/monasteries'>Monasteries</Link>
                </li>
                <li>
                    <Link to='/activities'>Activities</Link>
                </li>
                <li>
                    <Link to='/restaurants'>Restaurants</Link>
                </li>
                <li>
                    <Link to='/help'>Help</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navigation;