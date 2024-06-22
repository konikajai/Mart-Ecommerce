import React from 'react'
import '../Discount/Discount.css'
const img = {
    width: '150px',
    height: '150px'
}
const h6h5 = {
    position: 'relative',
    // left: '40px'
}
const button = {
    position: 'relative',
    left: '10px',
    bottom: '40px',
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
    // position:'relative',
    // left:'40px'
}
function Discount({ Products }) {
    return (
        <>
            <section className='discount mt-5'>
                <h3 className='text-center mt-5'>Big Discount</h3>
                <div className='sofa-row d-flex justify-content-around'>
                    {Products.slice(0, 3).map((row1) => (
                        <div key={row1.id} className='sofa text-bg-light'>
                            <button style={button}>{row1.discount}%</button>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row1.imgUrl} alt="sofa1" />
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
                <div className='sofa-row d-flex justify-content-around mt-5'>
                    {Products.slice(3, 6).map((row2) => (
                        <div key={row2.id} className='sofa text-bg-light'>
                            <button style={button}>{row2.discount}%</button>
                            <i className="fa-regular fa-heart"></i>
                            <img style={img} src={row2.imgUrl} alt="sofa1" />
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


{/* <div className='sofa text-bg-light'>
                        <button style={button}>30% Off</button>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/double-sofa-01.png" alt="sofa1" />
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
                        <button style={button}>15% Off</button>
                        <i class="fa-regular fa-heart"></i>
                        <img style={img} src="../../../../images/double-sofa-02.png" alt="sofa1" />
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
                    </div> */}

export default Discount