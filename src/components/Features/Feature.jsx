import React from 'react'
import './Feature.css'

const styleDiv={
    padding:'15px',
    lineHeight:'30px'
}
function Feature() {
    return (
        <>
            <section className='feature'>
            <div style={styleDiv} className='free-ship d-flex flex-column justify-content-between align-items-center'>
                <i class="fa-solid fa-car mb-5"></i>
                <h6>Free Shipping</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={styleDiv} className='safe-pay d-flex flex-column justify-content-center align-items-center'>
                <i class="fa-solid fa-car mb-5"></i>
                <h6>Safe Payment</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={styleDiv} className='secure-pay d-flex flex-column justify-content-center align-items-center'>
                <i class="fa-solid fa-car mb-5"></i>
                <h6>Secure Payment</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={styleDiv} className='back-gur d-flex flex-column justify-content-center align-items-center'>
            <i class="fa-solid fa-headphones mb-5"></i>
                <h6>Back Gurantee</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </section>
        </>
    )
}

export default Feature