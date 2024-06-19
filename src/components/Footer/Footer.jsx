import React from 'react'

const ul={
    listStyle:'none'
}

function Footer() {
    return (
        <section className='d-flex justify-content-around text-bg-primary'>
            <div className='w-25'>
                <div className='d-flex'>
                    <i className="fa-solid fa-bag-shopping me-3"></i>
                    <h5>Mart</h5>
                </div>
                <p className='border border-primary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolorum cupiditate excepturi fugit enim! Quia suscipit consequa ipsum libero esse autem.</p>
            </div>
            <div className='border border-primary'>
                <h5>About Us</h5>
                <ul style={ul}>
                    <li>Careers</li>
                    <li>Our Stories</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='border border-primary'>
                <h5>Customer Care</h5>
                <ul style={ul}>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Return & Refunds</li>
                </ul>
            </div>
            <div className='border border-primary'>
                <h5>Contact Us</h5>
                <ul style={ul}>
                    <li className='w-25'>#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029</li>
                    <li>Email : info@achieversit.com</li>
                    <li>Phone : +91 8431-040-457</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer