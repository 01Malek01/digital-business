'use client'
import React, { useRef } from 'react'
import './brandingVideo.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BrandingVideo() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end'],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <div className="bv-container">
            <div className="container">
                <motion.video
                    ref={ref}
                    style={{
                        scale
                    }}


                    className='bv-video' autoPlay loop muted controls="" type={'video/mp4'}>
                    <source src='/video.mp4' />
                </motion.video>
            </div>
        </div>

    )
}
