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
function NewArrivals({ newArrivals }) {
    return (
        <>
            <section className='new-arrivals mt-5'>
                <h3 className='text-center mt-5'>New Arrivals</h3>
                <div className='mobile-row d-flex justify-content-around'>
                    {newArrivals.slice(0, 3).map((row1) => (
                        <div key={row1.id} className='sofa text-bg-light lh-lg'>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row1.imgUrl} alt="phone1" />
                            <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                                <h6>{row1.productName}</h6>
                                <div style={rating}>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <h5 style={h6h5}>{row1.price}$</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mobile-row d-flex justify-content-around mt-5'>
                    {newArrivals.slice(3, 6).map((row2) => (
                        <div key={row2.id} className='sofa text-bg-light lh-lg'>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row2.imgUrl} alt="phone1" />
                            <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                                <h6>{row2.productName}</h6>
                                <div style={rating}>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <h5 style={h6h5}>{row2.price}$</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default NewArrivals