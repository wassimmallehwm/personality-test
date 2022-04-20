import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const Navbar = () => {


    return (
        <nav className="flex flex-wrap items-center justify-between px-2 z-10 
            transition-colors duration-500 ease top-0 fixed w-full h-24">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <Link
                        className="text-text_color text-sm font-bold leading-relaxed inline-block mx-4 py-2 whitespace-nowrap uppercase"
                        to="/"
                    >
                        {/* {scrolled ? 'Scrolled' : "NOT"} */}
                        <img src={logoImg} className="max-h-20" alt="Logo" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
