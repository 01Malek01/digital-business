import { testimonialsData } from '@/src/utils/data'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

function SlickSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCss: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]





    }
    return (
        <div>
            <Slider {...settings}>
                {
                    testimonialsData.map((item, index) => {
                        return (
                            <div className='comment' key={index}>
                                {/* upper side */}
                                <div className="c-content">
                                    <Image src={'/apos.svg'} alt='apos' width='40' height='30' className='apos-slider' />
                                    <span>{item.comment}</span>
                                </div>
                                {/* lower side */}
                                <div className="c-info">
                                    <div className="c-avatar">
                                        {item.name[0]}
                                    </div>
                                    <div className="c-person">
                                        <span>{item.name}</span>
                                        <span>{item.profession}</span>
                                    </div>

                                </div>



                            </div>
                        )
                    })

                }


            </Slider>
        </div>
    )
}

export default SlickSlider
