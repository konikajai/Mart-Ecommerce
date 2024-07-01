import React from 'react'
import Slider from "react-slick";
import './Slider.css'

function HomeSlider(props) {
    const { Sdata } = props
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const image = {
        height: '350px',
        marginTop: '50px'
    }
    return (
        <>
            <section style={{ maxWidth: '99%' }} className='homeslider text-bg-light'>
                <div className='container-fluid'>
                    <Slider {...settings}>
                        {Sdata.map((data, index) => (
                            <div key={data.id} className='d-flex justify-content-around align-items-center row'>
                                <div className='col-md-6 ms-auto col-sm-12'>
                                    <h1 className='w-50'>{data.title}</h1>
                                    <p className='w-75'>{data.desc}</p>
                                    <h6>Visit Collections</h6>
                                </div>
                                <div className='col-md-4 me-auto col-sm-12'>
                                    <img style={image} className='img-fluid rounded mx-auto d-block' src={data.cover} alt="cover" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}
export default HomeSlider