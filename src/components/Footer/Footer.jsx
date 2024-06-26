import React from 'react'

const section={
    color: 'white',
    backgroundColor: 'rgb(4, 4, 71)'
}
const ul = {
    listStyle: 'none'
}

function Footer() {
    return (
        <section style={section}>
            <div className='container'>
                <div className='row row-cols-lg-3"'>
                    <div className='col'>
                        <div className='row row-cols-6'>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <h5>Mart</h5>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolorum cupiditate excepturi fugit enim! Quia suscipit consequa ipsum libero esse autem.</p>
                    </div>
                    <div className='col'>
                        <h5>About Us</h5>
                        <ul style={ul}>
                            <li>Careers</li>
                            <li>Our Stories</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>Customer Care</h5>
                        <ul style={ul}>
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Corporate & Bulk Purchasing</li>
                            <li>Return & Refunds</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>Contact Us</h5>
                        <ul style={ul}>
                            <li>#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029</li>
                            <li>Email : info@achieversit.com</li>
                            <li>Phone : +91 8431-040-457</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer