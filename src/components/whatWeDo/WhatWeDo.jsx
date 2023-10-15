'use client';
import { features } from '@/src/utils/data';
import './whatWeDo.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVarianrts, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';
export default function WhatWeDo() {

    return (
        <>
            <div className="wwd-wrapper">
                <div className="container">
                    <div
                    >
                        {/* head of section */}
                        <div className="wwd-head">
                            <motion.span
                                initial='offscreen'
                                whileInView={'onscreen'}
                                variants={tagVariants}

                                className='tag'>
                                What we do

                            </motion.span>

                            <motion.span
                                initial='offscreen'
                                whileInView={'onscreen'}
                                variants={titleVariants}

                                className='title'>
                                Empowering founders with non dilutive capital


                            </motion.span>

                            <motion.span
                                initial='offscreen'
                                whileInView={'onscreen'}
                                variants={desVariants}

                                className='des'>
                                Here is how we can evaluate your business

                            </motion.span  >


                        </div>
                        {/* two blocks */}
                        <div className="wwd-blocks">
                            {/* first block */}
                            <div className="wwd-block">
                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={titleVariants}

                                    className='sec-title'>Blue Advances</motion.span>
                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={desVariants}
                                    className='text'>Fund recurring expenses e.g. customer acquisition inventory </motion.span>
                                <div className="block-features">
                                    {
                                        features.slice(0, 3).map((feature, index) => (
                                            <motion.div
                                                initial='offscreen'
                                                whileInView={'onscreen'}
                                                variants={containerVarianrts((index + 1) * 0.1)}
                                                key={index} className='block-feature'>
                                                <Image src={feature.icon} alt="feature" width={60} height={60} />
                                                <motion.span>{feature.title}</motion.span>
                                            </motion.div>

                                        ))
                                    }


                                </div>
                            </div>
                            {/* second block */}
                            <div className="wwd-block">
                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={titleVariants}
                                    className='sec-title'>Blue Seed</motion.span>
                                <motion.span className='text'>Fund recurring expenses e.g. customer acquisition inventory </motion.span>
                                <div className="block-features">
                                    {
                                        features.slice(3, 6).map((feature, index) => (
                                            <motion.div
                                                initial='offscreen'
                                                whileInView={'onscreen'}
                                                variants={containerVarianrts((index + 1) * 0.1)}
                                                key={index} className='block-feature'>
                                                <Image src={feature.icon} alt="feature" width={60} height={60} />
                                                <motion.span>{feature.title}</motion.span>
                                            </motion.div>

                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                        {/* support block */}
                        <div className="wwd-support">
                            {/* left side */}
                            <div>

                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={titleVariants}
                                    className='sec-title'>Blue Growth Support</motion.span>
                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={desVariants}

                                    className='des'> Data insights and full stack expertise to supercharge growth</motion.span>
                            </div>
                            {/* right side */}
                            <div>
                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={desVariants}

                                    className='text'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam expedita quibusdam, esse atque minima aliquam sint? Dolores, in incidunt! Fugit illo nemo facere repellk.</motion.span>
                                <motion.span
                                    initial='offscreen'
                                    whileInView={'onscreen'}
                                    variants={desVariants}
                                    className='text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis exercitationem dolor laudantium blandt, sit Fugit eveniet vero placeat magni. Eaque numquam perferendis accusamus quasi aperiam vel vitae dicta dolores quibusdam, recusandae adipisci velit inventore ipsa repudiandae dolore?</motion.span>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
