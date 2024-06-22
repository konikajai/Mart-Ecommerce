import React from 'react'
import '../ShopCategory/ShopCategory.css'

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

function ShopCategory({ Shop }) {
    return (
        <>
            <section className='best-sales mt-5'>
                <h3 className='text-center mt-5'>Best Sales</h3>
                <div className='double-sofa-row1 d-flex justify-content-around'>
                    {Shop.slice(0, 3).map((row1) => (
                        <div key={row1.id} className='sofa text-bg-light'>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row1.imgUrl} alt="double-sofa1" />
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
                <div className='double-sofa-row2 d-flex justify-content-around mt-5'>
                    {Shop.slice(3, 6).map((row2) => (
                        <div key={row2.id} className='sofa text-bg-light'>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row2.imgUrl} alt="double-sofa1" />
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
                <div className='double-sofa-row2 d-flex justify-content-around mt-5'>
                    {Shop.slice(6, 8).map((row3) => (
                        <div key={row3.id} className='sofa text-bg-light'>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row3.imgUrl} alt="double-sofa1" />
                            <div className='d-flex flex-column justify-content-between align-items-center lh-lg'>
                                <h6>{row3.productName}</h6>
                                <div style={rating}>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <h5 style={h6h5}>{row3.price}$</h5>
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ShopCategory