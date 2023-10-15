import './email-box.css';
import { LuMail } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { containerVarianrts } from '@/src/utils/animation';
export default function EmailBox() {
    return (
        <motion.div
            initial={{
                width: '.5rem',
                borderRadius: '100%',
            }}
            whileInView={{
                width: '70%',
                borderRadius: '999px',
                transition: {
                    duration: 1,
                    type: 'ease-out',
                }
            }}
            viewport={{ once: true }}

            className="emailBox">
            {/* email icon */}
            <motion.div
                variants={containerVarianrts(0.6)}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true }}
            >
                <LuMail size={30} color='grey' />
            </motion.div>

            {/* input */}
            <motion.input
                variants={containerVarianrts(0.7)}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true }}


                type='email' placeholder='Enter your email' />


            {/* get funded button */}

            <motion.div
                variants={containerVarianrts(0.6)}
                initial="offscreen"
                whileInView={"onscreen"}
                viewport={{ once: true }}

                className="getFunded">Get Funded</motion.div>

        </motion.div>


    )
}
