'use client'
import { ourDiffFeatures } from '@/src/utils/data';
import './ourDiff.css';
import { motion } from 'framer-motion';
import { containerVarianrts, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';
export default function OurDiff() {
    return (
        <>
            <div className="od-wrapper">
                <div className="od-container">
                    <div className="container">
                        <div className="od-head">
                            <motion.span
                                initial='offscreen'
                                whileInView={'onscreen'}
                                variants={tagVariants}

                                className='tag'>Our Difference</motion.span>
                            <motion.span
                                initial='offscreen'
                                whileInView={'onscreen'}
                                variants={titleVariants}

                                className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reiciendis.</motion.span>
                            <motion.span
                                initial='offscreen'
                                whileInView={'onscreen'}
                                variants={desVariants}

                                className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eum rerum facilis explicabo facere nostrum, a nobis sed mollitia, repudiandae doloribus quos quam iusto, natus culpa atque perferendis architecto ipsam!</motion.span>

                        </div>

                        <div className="od-blocks">
                            {
                                ourDiffFeatures.map((item, index) => {
                                    return (
                                        <motion.div
                                            initial='offscreen'
                                            whileInView={'onscreen'}
                                            variants={containerVarianrts((index + 1) * 0.2)}

                                            className="od-block" key={index}>
                                            <img width={"100px"} height={"100px"} src={item.icon} alt="icon" />
                                            <motion.span className='title'>{item.title}</motion.span>
                                            <motion.span className='text'>{item.des}</motion.span>
                                        </motion.div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>


            </div>


        </>
    )
}
