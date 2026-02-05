import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const NavbarWrapper: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <Navbar isScrolled={isScrolled} />;
};

export default NavbarWrapper;
