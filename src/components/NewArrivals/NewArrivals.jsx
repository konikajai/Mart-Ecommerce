import React from 'react'
import '../NewArrivals/NewArrivals.css'

const img = {
    width: '150px',
    height: '150px',
    marginLeft: '50px'
}
const h6h5 = {
    position: 'relative',
    // left: '40px'
}
const rating = {
    color: 'orange',
    // position: 'relative',
    // left: '40px'
}
function NewArrivals() {
    return (
        <>
            <section className='new-arrivals mt-5'>
                <h3 className='text-center mt-5'>New Arrivals</h3>
                <div className='mobile-row d-flex justify-content-around'>
                    <div className='sofa text-bg-light lh-lg'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/phone-01.jpg" alt="phone1" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/phone-02.jpg" alt="phone2" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/phone-03.png" alt="phone3" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className='mobile-row d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/phone-04.jpg" alt="phone4" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/phone-05.jpg" alt="phone5" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/phone-06.jpg" alt="phone6" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className='wireless-row d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/wireless-01.png" alt="wireless1" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/wireless-02.png" alt="wireless2" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/wireless-03.png" alt="wireless3" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light'>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/wireless-04.png" alt="wireless-04" />
                        <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                            <h6>Stone and Beam Westview</h6>
                            <div style={rating}>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                        </div>
                        <div className='d-flex justify-content-around mt-3'>
                            <h5 style={h6h5}>$193</h5>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrivals