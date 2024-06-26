import React from 'react'
import '../CartData/CartData.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/ProductAction/ProductAction'

const img = {
  width: '140px',
  height: '140px'
}

function CartData() {
  const dispatch = useDispatch();

  const cart_data = useSelector((state) => state.productData.cartData)
  console.log(cart_data);

  return (
    <section className='single-product d-flex justify-content-around'>
      {cart_data && cart_data.length ? (
        cart_data.map((product) => (
        <div className='product d-flex justify-content-around'>
          <div>
            <img style={img} src={product.imgUrl} alt="phone" />
          </div>
          <div className='d-flex flex-column justify-content-center'>
            <h5>{product.productName}</h5>
            <div className='price d-flex justify-content-between'>
              <p>${product.price}*2</p>
              <p>$1798.00</p>
            </div>
          </div>
          <div className='d-flex flex-column'>
            <div className='ms-5 mt-2'>
              <i className="fa-solid fa-xmark" onClick={()=>{dispatch(removeFromCart(product.id))}}></i>
            </div>
            <span>
              <button><i className="fa-solid fa-plus"></i></button>
              <button className='ms-2'><i className="fa-solid fa-minus"></i></button>
            </span>
          </div>
        </div>
      ))    
      ) : (<p>No Product is added to the Cart !</p>)
    }

      <div className='summary lh-lg'>
        <h5 className='mt-2 ms-3'>Cart Summary</h5>
        <hr />
        <p className='mt-4 ms-3'>Total Price</p>
        <h5 className=' ms-3'>& 1798.00</h5>
      </div>
    </section>
  )
}

export default CartData