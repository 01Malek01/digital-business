import { whoWeInvest } from '@/src/utils/data';
import './whoWeInvest.css';
import Image from 'next/image';
export default function WhoWeInvest() {
    return (
        <>
            <div className="wwi-wrapper">
                <div className="container">

                    <div className="wwi-container">
                        {/* left side */}
                        <div className="wwi-left">
                            <div className="head">
                                <span className='tag'> Who we invest in</span>
                                <span className='title'>Lorem ipsum dolor sittque?</span>
                            </div>
                            <div className="wwi-features">
                                {
                                    whoWeInvest.map((item, index) => {
                                        return (
                                            <div className="wwi-feature" key={index}>
                                                <span className='des'>{item.title}</span>
                                                <span className='text'>{item.des}</span>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>

                        {/* right side */}

                        <div className="wwi-right">
                            <img src={'persons.png'} alt='persons' />

                        </div>

                    </div>
                </div>
            </div>


        </>

    )
}
