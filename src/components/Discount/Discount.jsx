import React from 'react'
import '../Discount/Discount.css'

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
    borderRadius:'10px',
    color:'white',
    height:'20px',
    width:'50px',
    fontSize:'10px',
    backgroundColor:'blue',
    border:'none'
}
const rating ={
    color:'orange',
    position:'relative',
    left:'40px'
}
function Discount() {
    return (
        <>
            <section className='discount border border-primary mt-5'>
                <h3 className='text-center mt-5'>Big Discount</h3>
                <div className='sofa-row d-flex justify-content-around'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/double-sofa-01.png" alt="sofa1" />
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
                        <img style={img} src="../../../../images/double-sofa-02.png" alt="sofa1" />
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
                        <img style={img} src="../../../../images/arm-chair-02.jpg" alt="sofa1" />
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
                <div className='sofa-row d-flex justify-content-around mt-5'>
                    <div className='sofa text-bg-light lh-lg'>
                        <button style={button}>30% Off</button>
                        <img style={img} src="../../../../images/arm-chair-03.jpg" alt="sofa1" />
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
                        <img style={img} src="../../../../images/phone-03.png" alt="sofa1" />
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
                        <img style={img} src="../../../../images/phone-04.jpg" alt="sofa1" />
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

export default Discount