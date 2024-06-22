import React from 'react'
import './Service.css'

const styleDiv={
    padding:'15px',
    lineHeight:'30px'
}

function Services(props) {
    // console.log(props.serviceData.icon)
    const {serviceData} = props
    return (
        <>
            <section className='services'>
            {serviceData.map((data,index)=>(
                <div key={index} style={styleDiv} className='free-ship d-flex flex-column justify-content-between align-items-center'>
                <i className="fa-solid fa-car mb-5 {data.icon}"></i>
                <h6>{data.title}</h6>
                <p>{data.subtitle}</p>
            </div>
            ))}
            </section>
        </>
    )
}

export default Services