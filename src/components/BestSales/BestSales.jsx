import React from 'react'
import '../BestSales/BestSales.css'

const img = {
    width: '150px',
    height: '150px',
    marginLeft:'50px'
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

function BestSales() {
    return (
        <>
            <section className='best-sales mt-5'>
                <h3 className='text-center mt-5'>Best Sales</h3>
                <div className='double-sofa-row1 d-flex justify-content-around'>
                    <div className='sofa text-bg-light'>
                    <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/double-sofa-01.png" alt="double-sofa1" />
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
                        <img style={img} src="../../../../images/double-sofa-02.png" alt="double-sofa2" />
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
                        <img style={img} src="../../../../images/double-sofa-03.png" alt="double-sofa3" />
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
                <div className='double-sofa-row2 d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light'>
                    <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/double-sofa-02.png" alt="double-sofa-4" />
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
                        <img style={img} src="../../../../images/single-sofa-01.jpg" alt="single-sofa1" />
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
                        <img style={img} src="../../../../images/single-sofa-02.jpg" alt="single-sofa2" />
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
                <div className='single-sofa-row1 d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light'>
                    <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/single-sofa-03.jpg" alt="single-sofa3" />
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
                        <img style={img} src="../../../../images/single-sofa-04.png" alt="single-sofa4" />
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

export default BestSales