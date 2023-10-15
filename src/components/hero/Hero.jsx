'use client';
import { HeroData } from '@/src/utils/data';
import EmailBox from '../email-box/EmailBox';
import './hero.css';
import { animate, motion } from 'framer-motion';
import { Content } from 'next/font/google';
import BrandingVideo from '../brandingVideo/BrandingVideo';
export default function Hero() {
    const variants = (delay) => {
        return {
            initial: {
                y: '18rem',
                opacity: 0
            },
            animate: {
                y: '0rem',
                opacity: 1,
                transition: {
                    type: 'spring',
                    damping: 25,
                    duration: 2.5,
                    delay
                }

            }


        }
    }
    const imageVariants = () => {
        return {
            initial: {
                y: '18rem'
            },
            animate: {
                y: '0rem',
                transition: {
                    type: 'spring',
                    damping: 25,
                    duration: 2,
                    stiffness: 30,
                }
            }
        }
    }
    return (
        <div className="h-wrapper">
            <div className="container">
                <img src='/hero/hero-arrow.png' alt='hero' className='h-arrow' />
                <div className="h-container">

                    {/* left side */}
                    <div className="h-left">
                        <div className="image-row">
                            {HeroData.slice(0, 3).map((person, i) => (
                                <motion.div
                                    initial={'initial'}
                                    animate={'animate'}
                                    variants={variants(person.delay)}
                                    style={{ background: person.bg }}

                                    key={i} className="person-pill">
                                    <div className="person-pill-bg">
                                        <motion.img
                                            initial={'initial'}
                                            animate={'animate'}
                                            variants={imageVariants()}
                                            src={person.src} alt={person.src} />
                                    </div>
                                </motion.div>

                            ))}
                        </div>
                        <div className="image-row">
                            {HeroData.slice(3, 6).map((person, i) => (
                                <motion.div
                                    initial={'initial'}
                                    animate={'animate'}
                                    variants={variants(person.delay)}
                                    style={{ background: person.bg }}

                                    key={i} className="person-pill">
                                    <div className="person-pill-bg">
                                        <motion.img
                                            initial={'initial'}
                                            animate={'animate'}
                                            variants={imageVariants()}
                                            src={person.src} alt={person.src} />
                                    </div>
                                </motion.div>

                            ))}
                        </div>
                    </div>

                    {/* right side */}
                    <div className="h-right">
                        <div className="h-title">
                            <span>Redefine How</span>
                            <span>You Grow your</span>
                            <span>Digital business</span>
                        </div>
                        <div className="h-des">
                            Revenue based funding and execution support designed for early stage founders

                        </div>
                        <EmailBox />
                    </div>

                </div>
            </div>

        </div>

    )
}
