import React from 'react'
import './Feature.css'

const styleDiv={
    // height:'170px',
    padding:'10px 0px 10px 50px',
    lineHeight:'50px'
}
function Feature() {
    return (
        <>
            <section className='d-flex justify-content-around align-items-center'>
            <div style={styleDiv} className='free-ship'>
                <i class="fa-solid fa-car"></i>
                <h6>Free Shipping</h6>
                <p className='me-5'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={styleDiv} className='safe-pay'>
                <i class="fa-solid fa-car"></i>
                <h6>Safe Payment</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={styleDiv} className='secure-pay'>
                <i class="fa-solid fa-car"></i>
                <h6>Secure Payment</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div style={styleDiv} className='back-gur'>
                <i class="fa-solid fa-car"></i>
                <h6>Back Gurantee</h6>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            </section>
        </>
    )
}

export default Feature