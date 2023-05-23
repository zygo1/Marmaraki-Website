import '.././styles/Navigation.css';
import meteora from '.././assets/meteora.png';
import meteora_black from '.././assets/meteora-black.png';
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

    useEffect(() => {
        window.addEventListener('click', handleNavBarClick);

        return () => {
            window.removeEventListener('click', handleNavBarClick);
        }
    }, []);

    // Reset the navbar to its initial position every time that media queries occurs
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        const handleMediaQueryChange = () => {
            setIsActive(false);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };

    }, [])

    return (
        <nav className='navigationBar' >
            <div className='image-brandname'>
                <img src={meteora_black} alt='Meteora' />
                <Link to='/'>Marmaraki</Link>
            </div>
            <span ref={linkRef} onClick={handleToggle} className="material-symbols-outlined menu visible">Menu</span>
            <ul className={`navLinks ${isActive ? 'active' : ''}`} >
                <li>
                    <Link to='/meteora'>Meteora</Link>
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