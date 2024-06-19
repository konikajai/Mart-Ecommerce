import React from 'react'
import '../NewArrivals/NewArrivals.css'

const img = {
    width: '160px',
    height: '130px'
}
const h6h5 = {
    position: 'relative',
    // left: '40px'
}
const button = {
    position: 'relative',
    left: '10px',
    bottom: '30px',
    borderRadius: '10px',
    color: 'white',
    height: '20px',
    width: '50px',
    fontSize: '10px',
    backgroundColor: 'blue',
    border: 'none'
}
const rating = {
    color: 'orange',
    position: 'relative',
    left: '40px'
}
function NewArrivals() {
    return (
        <>
            <section className='new-arrivals border border-primary mt-5'>
                <h3 className='text-center mt-5'>New Arrivals</h3>
                <div className='mobile-row d-flex justify-content-around'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/phone-01.jpg" alt="phone1" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6 style={h6h5}>Stone and Beam Westview</h6>
                        <h5 style={h6h5}>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>

                    <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/phone-02.jpg" alt="phone2" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6>Stone and Beam Westview</h6>
                        <h5>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/phone-03.png" alt="phone3" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6>Stone and Beam Westview</h6>
                        <h5>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className='mobile-row d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/phone-04.jpg" alt="phone4" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6 style={h6h5}>Stone and Beam Westview</h6>
                        <h5 style={h6h5}>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>

                    <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/phone-05.jpg" alt="phone5" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6>Stone and Beam Westview</h6>
                        <h5>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/phone-06.jpg" alt="phone6" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6>Stone and Beam Westview</h6>
                        <h5>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className='wireless-row d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/wireless-01.png" alt="wireless1" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6 style={h6h5}>Stone and Beam Westview</h6>
                        <h5 style={h6h5}>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>

                    <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/wireless-02.png" alt="wireless2" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6>Stone and Beam Westview</h6>
                        <h5>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>

                    <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/wireless-03.png" alt="wireless3" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6>Stone and Beam Westview</h6>
                        <h5>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/wireless-04.png" alt="wireless-04" />
                        <div style={rating}>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <h6 style={h6h5}>Stone and Beam Westview</h6>
                        <h5 style={h6h5}>$193</h5>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrivals