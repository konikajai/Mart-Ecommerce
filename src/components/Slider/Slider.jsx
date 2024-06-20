import React from 'react'
import Slider from "react-slick";
import './Slider.css'

function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className='homeslider text-bg-light'>
                <div className='container-fluid'>
                    <Slider {...settings}>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div className='ms-5'>
                                <h1 className='w-50'>50% Shopping On Your First Order</h1>
                                <p className='w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cupiditate quas sint nemo expedita architecto! Molestiae quia omnis facilis qui neque,  sint?</p>
                                <h6>Visit Collections</h6>
                            </div>
                            <img className='me-5' src='/images/hero-img.png' alt="Slide 1" />
                        </div>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div className='ms-5'>
                                <h1 className='w-50'>50% Shopping On Your First Order</h1>
                                <p className='w-75 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cupiditate quas sint nemo expedita architecto! Molestiae quia omnis facilis qui neque,  sint?</p>
                                <h6>Visit Collections</h6>
                            </div>
                            <img className='me-5' src='/images/wireless-01.png' alt="Slide 2" />
                        </div>
                        <div className='d-flex justify-content-around align-items-center'>
                            <div className='ms-5'>
                                <h1 className='w-50'>50% Shopping On Your First Order</h1>
                                <p className='w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit cupiditate quas sint nemo expedita architecto! Molestiae quia omnis facilis qui neque,  sint?</p>
                                <h6>Visit Collections</h6>
                            </div>
                            <img className='me-5' src='/images/watch-07.png' alt="Slide 3" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}
export default HomeSlider