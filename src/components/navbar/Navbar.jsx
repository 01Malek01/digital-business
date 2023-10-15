'use client';
import { useState } from 'react';
import './navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from 'react-scroll';

export default function Navbar() {

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState('');
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (latest > 0.2) {
            setNavStyle('sticky')
        } else {
            setNavStyle('')
        }
    })

    return (
        <div className={`n-wrapper ${navStyle}`}>
            {/* desktop version */}
            <div className="container">
                <div className="n-container">
                    {/* left side */}
                    <div className="n-logo">
                        <span style={{ fontSize: '1.2rem' }}>Malek Mostafa</span>
                    </div>
                    <div className="n-right">
                        <div className="n-menu">
                            <span>
                                <Link to={'wwd-wrapper'} smooth={true}>
                                    what we do
                                </Link>
                            </span>
                            <span>
                                <Link to={'hiw-wrapper'} smooth={true}>
                                    how it works
                                </Link>
                            </span>
                            <span>
                                <Link to={'wwi-wrapper'} smooth={true}>
                                    who we invest in
                                </Link>
                            </span>
                            <span>
                                <Link to={'t-wrapper'} smooth={true}>
                                    testimonials
                                </Link>
                            </span>

                        </div>
                        <div className="fund-button">
                            Get Funded
                        </div>
                    </div>
                </div>
            </div>




            {/* mobile / tab version */}
            <div className="nm-container">
                {/* logo */}

                <span>Malek Mostafa</span>

                {/* menu icon */}
                {
                    !mobileMenuOpened ?
                        <BiMenuAltRight
                            style={{
                                cursor: "pointer",
                            }} onClick={() => setMobileMenuOpened(true)}
                            size={30} /> : <RxCross2 style={{
                                cursor: "pointer",
                            }} onClick={() => setMobileMenuOpened(false)}
                                size={30} />
                }


                {/* mobile menu */}
                <div className="nm-menu"
                    style={{
                        transform: mobileMenuOpened ? "translateX(0)" : "translateX(100%)",

                    }}>
                    <span>
                        <Link onClick={() => setMobileMenuOpened(false)} to={'wwd-wrapper'} smooth={true}>
                            what we do
                        </Link>
                    </span>
                    <span>
                        <Link onClick={() => setMobileMenuOpened(false)} to={'hiw-wrapper'} smooth={true}>
                            how it works
                        </Link>
                    </span>
                    <span>
                        <Link onClick={() => setMobileMenuOpened(false)} to={'wwi-wrapper'} smooth={true}>
                            who we invest in
                        </Link>
                    </span>
                    <span>
                        <Link onClick={() => setMobileMenuOpened(false)} to={'t-wrapper'} smooth={true}>
                            testimonials
                        </Link>
                    </span>
                    <div className="m-funded-button">Get Funded</div>

                </div>



            </div>
        </div>
    )
}
