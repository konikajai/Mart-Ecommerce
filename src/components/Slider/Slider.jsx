import React from 'react'
import Slider from "react-slick";
import './Slider.css'

function HomeSlider(props) {
    const {Sdata} = props
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section style={{maxWidth:'99%'}} className='homeslider text-bg-light'>
                <div className='container-fluid' style={{height: '550px'}}>
                    <Slider {...settings}>
                        {Sdata.map((data,index)=>(
                            <div key={data.id} className='d-flex justify-content-around align-items-center'>
                            <div className='ms-5'>
                                <h1 className='w-50'>{data.title}</h1>
                                <p className='w-75'>{data.desc}</p>
                                <h6>Visit Collections</h6>
                            </div>
                            <img className='me-5' src={data.cover} alt="Slide 1" />
                        </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}
export default HomeSlider