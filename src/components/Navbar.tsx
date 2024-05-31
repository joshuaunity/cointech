import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from '../assets/logo.svg'
import logo2 from '../assets/logo2.svg'

const Navbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                            href="#pablo"
                        >
                            <img className='w-16' src={logo2} alt="logo" />
                        </a>
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center pl-24" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-bold leading-snug text-txtblack hover:opacity-60"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-bold leading-snug text-txtblack hover:opacity-60"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Service</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-bold leading-snug text-txtblack hover:opacity-60"
                                    href="#pablo"
                                >
                                    <span className="ml-2">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-bold leading-snug text-txtblack hover:opacity-60"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Contact</span>
                                </a>
                            </li>
                        </ul>

                        <div>
                            <a href="#" className="inline-block text-lg font-bold px-8 py-4 leading-none rounded text-primary hover:border-2 bg-white hover:border-transparent hover:text-white hover:border-white hover:bg-transparent mt-4 lg:mt-0">Register</a>
                        </div>
                    </div>


                </div>
            </nav>
        </>
    );

};

export default Navbar;