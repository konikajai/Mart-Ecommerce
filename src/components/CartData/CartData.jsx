import React from 'react'
import '../CartData/CartData.css'

const img = {
  width: '140px',
  height: '140px'
}

function CartData({CartData}) {
  console.log(CartData)

  return (
    <>
      <section className='single-product d-flex justify-content-around'>
        <div className='product d-flex justify-content-around'>
          <div>
            <img style={img} src={CartData.imgUrl} alt="phone" />
          </div>
          <div className='d-flex flex-column justify-content-center'>
            <h5>{CartData.productName}</h5>
            <div className='price d-flex justify-content-between'>
              <p>${CartData.price}*2</p>
              <p>$1798.00</p>
            </div>
          </div>
          <div className='d-flex flex-column'>
            <div className='ms-5 mt-2'>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <span>
              <button><i className="fa-solid fa-plus"></i></button>
              <button className='ms-2'><i className="fa-solid fa-minus"></i></button>
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
    </>
  )
}

export default CartData