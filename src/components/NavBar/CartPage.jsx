import React from 'react'
import Footer from '../Footer/Footer'
import '../NavBar/CartPage.css'

const img = {
  width: '140px',
  height: '140px'
}
function CartPage() {
  return (
    <>
      <section className='single-product d-flex justify-content-around'>
        <div className='product d-flex justify-content-around'>
          <div>
            <img style={img} src="../../../../images/phone-05.jpg" alt="phone" />
          </div>
          <div className='d-flex flex-column justify-content-center'>
            <h5>Apple iPhone 13 Pro</h5>
            <div className='price d-flex justify-content-between'>
              <p>$899.00*2</p>
              <p>$1798.00</p>
            </div>
          </div>
          <div className='d-flex flex-column'>
            <div className='ms-5 mt-2'>
            <i class="fa-solid fa-xmark"></i>
            </div>
            <span>
              <button><i class="fa-solid fa-plus"></i></button>
              <button className='ms-2'><i class="fa-solid fa-minus"></i></button>
            </span>
          </div>
        </div>
        <div className='summary lh-lg'>
          <h5 className='mt-2 ms-3'>Cart Summary</h5>
          <hr />
          <p className='mt-4 ms-3'>Total Price</p>
          <h5 className=' ms-3'>& 1798.00</h5>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default CartPage