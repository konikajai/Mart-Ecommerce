import React from 'react'
import '../BestSales/BestSales.css'

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
    position: 'relative',
    left: '40px'
}

function BestSales() {
    return (
        <>
            <section className='best-sales border border-primary mt-5'>
                <h3 className='text-center mt-5'>Best Sales</h3>
                <div className='double-sofa-row1 d-flex justify-content-around'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/double-sofa-01.png" alt="double-sofa1" />
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
                        <img style={img} src="../../../../images/double-sofa-02.png" alt="double-sofa2" />
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
                        <img style={img} src="../../../../images/double-sofa-03.png" alt="double-sofa3" />
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
                <div className='double-sofa-row2 d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/double-sofa-02.png" alt="double-sofa-4" />
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
                        <img style={img} src="../../../../images/single-sofa-01.jpg" alt="single-sofa1" />
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
                        <img style={img} src="../../../../images/single-sofa-02.jpg" alt="single-sofa2" />
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
                <div className='single-sofa-row1 d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/single-sofa-03.jpg" alt="single-sofa3" />
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
                        <img style={img} src="../../../../images/single-sofa-04.png" alt="single-sofa4" />
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
            </section>
        </>
    )
}

export default BestSales