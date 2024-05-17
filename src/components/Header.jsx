import React, { useState, useEffect } from 'react';

import { Link, NavLink } from 'react-router-dom';
import {FaBars ,FaXmark} from 'react-icons/fa6'
import { PiImagesSquareFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Header() {

    const [nav, setNav] = useState(false)
    const handleNav = ()=> setNav(!nav)
    const handleClose = ()=> setNav(!nav)

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
        <header className=" sticky z-50 top-0 ">
            <nav className={`items-center text-center px-6 lg:px-14 py-6 absolute top-0 left-0 right-0 z-10 ${isScrolled ? 'backdrop-blur-md bg-black/30' : ' bg-none'}`}>
                <div className="flex flex-wrap justify-between items-center max-w-none w-full">
                    <Link to="/home" onClick={scrollToTop} className={`items-center flex  ${isScrolled ? '' : ' lg:pl-44'}`}>
                        <h1 className='mr-3 gap-2 flex text-white font-light items-center text-xl md:text-3xl lg:text-4xl'>MORDEN <PiImagesSquareFill className='text-3xl lg:text-6xl' /><span className='font-semibold'>GALLERY</span></h1>
                    </Link>

                        <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 lg:text-[14px] uppercase text-center text-white"
                        id="mobile-menu-2">
                            
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                onClick={scrollToTop} to="/home"
                                >
                                    <button className=' px-4 border-[0.5px] border-gray-400 hover:border-white p-2 rounded-full '>GALLERY</button>
                                </NavLink>
                                
                            </li>
                            
                            <li>
                                <NavLink
                                onClick={scrollToTop} to="/contact"
                                >
                                <button className='flex px-4 gap-2 border-[0.5px] border-gray-400 hover:border-white p-2 rounded-full font-bold'>CONTACT <FaArrowRightLong size={20} className='text-xs animate-pulse'/></button>
                                </NavLink>
                                
                            </li>

                        </ul>

                    </div>
                
                    <div >
                    <ul className={!nav ? 'hidden' : 'absolute w-full mt-10 font-light p-4 py-10 left-0  text-white bg-black h-screen text-2xl '}>
                    <li>
                                <NavLink onClick={handleClose}
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-6 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-grey-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <span onClick={scrollToTop}>Home</span>
                                </NavLink>
                                
                            </li>
                            
                            <li>
                                <NavLink onClick={handleClose}
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-6 pr-4 pl-3 duration-200 ${isActive ? "text-white" : "text-grey-700"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <span onClick={scrollToTop}>Contact Us</span>
                                </NavLink>
                                
                            </li>

                        </ul>
                    </div>
        <div className='lg:hidden mr-2 text-white' onClick={handleNav}>
                        {!nav ? <FaBars className='w-5' size={30}/> : <FaXmark className='w-5'size={30}/>}
                    </div>
            </div>
            </nav>
        </header>

        </>
    );
}