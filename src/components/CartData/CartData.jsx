import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/ProductAction/ProductAction'

const img = {
  width: '140px',
  height: '140px'
}

const productcss = {
  marginBottom: '50px',
  width: '600px',
  padding: '10px',
  height: '160px',
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)'
}

const summary = {
  height: '160px',
  width: '300px',
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)'
}
const icon = {
  marginTop: '50px',
  fontSize: '20px',
  border: '1px solid rgba(128, 128, 128, 0.2)',
  padding: '3px 5px',
  borderRadius: '5px'
}
function CartData() {
  const dispatch = useDispatch();

  const cart_data = useSelector((state) => state.productData.cartData)
  console.log(cart_data);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cart_data.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice.toFixed(2);
  };


  return (
    <section style={{ marginTop: '70px' }} className='d-flex flex-wrap justify-content-around'>
      <div className='d-flex flex-column flex-wrap'>
        {cart_data && cart_data.length ? (
          cart_data.map((product) => (
            <div style={productcss} className='d-flex flex-wrap justify-content-around'>
              <div>
                <img style={img} src={product.imgUrl} alt={product.category} />
              </div>
              <div className='d-flex flex-column justify-content-center'>
                <h5>{product.productName}</h5>
                <div style={{ marginTop: '30px' }} className='d-flex justify-content-between'>
                  <p>${product.price} x {product.quantity}</p>
                  <p>${(product.price * product.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='ms-5 mt-2'>
                  <i style={{ fontSize: '20px' }} className="fa-solid fa-xmark" onClick={() => dispatch(removeFromCart(product.id))}></i>
                </div>
                <span>
                  <i style={icon} className="fa-solid fa-plus" onClick={() => dispatch(increaseQuantity(product.id))}></i>
                  <i style={icon} className="fa-solid fa-minus ms-2" onClick={() => dispatch(decreaseQuantity(product.id))}></i>
                </span>
              </div>
            </div>
          ))
        ) : (<div style={productcss}>
          <h6 className='ms-5 mt-3'>No Product is added to the Cart !</h6>
        </div>)
        }
      </div>

      <div style={summary} className='lh-lg mb-5'>
        <h5 className='mt-2 ms-3'>Cart Summary</h5>
        <hr style={{ opacity: '0.1' }} />
        <p className='mt-4 ms-3'>Total Price</p>
        <h5 className=' ms-3'>${calculateTotalPrice()}</h5>
      </div>
    </section>
  )
}

export default CartData