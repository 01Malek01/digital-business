'use client'
import { hitFeatures } from '@/src/utils/data';
import './howItWorks.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/src/utils/animation';
export default function HowItWorks() {
    const featureVariants = {
        offscreen: {
            scale: .5
        },
        onscreen: {
            scale: 1,
            transition: {
                type: 'spring',
                duration: 1.5
            }
        }

    }
    return (
        <>
            <div className="hiw-wrapper">
                <div className="container">
                    <div className="hiw-container">


                        {/* head */}
                        <div className="hiw-head">
                            <span className='tag'>
                                How it works
                            </span>

                            <span className='title'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, error!
                            </span>
                        </div>

                        <motion.div
                            variants={featureVariants}
                            initial='offscreen'
                            whileInView={'onscreen'}

                            className="hiw-features" >
                            {
                                hitFeatures.map((feature, i) => (
                                    <div className='hiw-feature' key={i}>

                                        {/* // left side */}
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                x: -100
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                x: 0
                                            }}
                                            transition={{
                                                type: 'ease-in',
                                                duration: 1,
                                                delay: .7
                                            }}

                                            className="detail">
                                            <motion.span
                                                variants={tagVariants}
                                                initial='offscreen'
                                                whileInView={'onscreen'}

                                                className='des'>0{i + 1}</motion.span>
                                            <motion.span
                                                variants={titleVariants}
                                                initial='offscreen'
                                                whileInView={'onscreen'}

                                                className='sec-title'>{feature.title}</motion.span>
                                            <motion.span
                                                variants={desVariants}
                                                initial='offscreen'
                                                whileInView={'onscreen'}

                                                className='text'>{feature.des}</motion.span>
                                        </motion.div>
                                        {/* // right side */}
                                        <div className="icon">
                                            <Image style={{
                                                translate: '50% 0rem'
                                            }} src={feature.icon} alt={feature.title} width={120} height={120} />
                                        </div>
                                    </div>
                                )




                                )
                            }

                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    )
}
