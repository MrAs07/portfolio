import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from '../constants';

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toogleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            const offset = -85;

            // getBoundingClientRect() : calculate the distance from target element to the top of viewport
            const elementPosition = targetElement.getBoundingClientRect().top;

            const offsetPosition = elementPosition + window.scrollY + offset;

            // for smooth scroll

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
        setIsMobileMenuOpen(false);
    }
    return (
        <div >
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* Desktop Menu */}
                <div className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/20 bg-black py-3 backdrop-blur-lg lg:flex '>
                    <div className='flex items-center justify-between gap-6'>
                        {/* logo */}
                        <div>
                            <a href='#'>
                                <img src={logo} width={150} alt="logo" />
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <motion.a
                                        initial={{opacity:0,y:-30}}
                                        whileInView={{opacity:1,y:0}}
                                        transition={{duration:1.5,delay:index*0.3}}

                                         className='text-sm hover:text-purple-500'
                                            href={item.href}
                                            onClick={(e) => handleLinkClick(e, item.href)} >
                                            {item.label}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    {/* logo  */}
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" width={90} className="m-2" />
                        </a>
                    </div>

                    <motion.div
                    initial={{opacity:0,x:-30}}
                    whileInView={{opacity:1,x:0}}
                    transition={{duration:1}}
                     className='flex items-center'>
                        <button className='focus:outline-none lg:hidden'
                            onClick={toogleMobileMenu}>
                            {isMobileMenuOpen ? (
                                <FaTimes className='h-6 w-5' />
                            ) : (
                                <FaBars className="m-2 h-6 w-5" />
                            )}

                        </button>
                    </motion.div>
                    {isMobileMenuOpen && (
                        <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md '>
                            {NAVIGATION_LINKS.map((item,index)=>(
                                <motion.li
                                 key={index}
                                 initial={{opacity:0,y:-30}}
                                        whileInView={{opacity:1,y:0}}
                                        transition={{duration:1.5,delay:index*0.3}}>
                                    <a href={item.href} className="block w-full"
                                    onClick={(e)=> handleLinkClick(e,item.href)}>
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    )}

                </div>
            </nav>

        </div>
    )
}

export default Navbar
