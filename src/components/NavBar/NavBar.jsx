import React, { useState } from 'react'
// import './Nav.css'
// import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

import { useSelector } from 'react-redux';

const navbar = {
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
  height: '100px',
}
const navlink = {
  cursor: 'pointer',
  fontSize: '17px',
  margin: '25px'
  // color:isactive ?'green':'red',
  //   fontSize:isactive ?'16px':'14px'
}

const span={
  padding:'0px 5px',
  borderRadius:'50%',
  color:'white',
  fontSize:'12px',
  backgroundColor:'blue',
  position:'relative',
  bottom:'10px',
  right:'3px'
}

function Nav() {
  
  const cartData = useSelector((state) => state.productData.cartData);
  const cartCount = cartData.reduce((total, product) => total + product.quantity, 0);

  return (
    <>
      <div className='navbar d-flex justify-content-around align-items-center' style={navbar}>
        <div className='logo d-flex align-items-center'>
          {/* <i style={{fontSize:'25px'}} className="fa-solid fa-bag-shopping me-3"></i> */}
          <div style={{marginRight:'100px'}}>
          <img style={{width:'200px',height:'70px'}} src={logo} alt="logo" />
          </div>
          {/* <h2>MART</h2> */}
        </div>
        <div className='nav d-flex align-items-center'>
          <ul className='d-flex text-center mt-2 list-unstyled no-underline'>
            <li style={navlink}><NavLink style={{textDecoration: 'none',color: 'black',fontWeight:'bold'}} to='/'>Home</NavLink></li>
            <li style={navlink}><NavLink style={{textDecoration: 'none',color: 'black',fontWeight:'bold'}} to='../shop'>Shop</NavLink></li>
            <li style={navlink}><NavLink style={{textDecoration: 'none',color: 'black',fontWeight:'bold'}} to='/cart'>Cart</NavLink></li>
          </ul>
          <i className="fa-solid fa-user ms-3 mb-2"></i>
          <NavLink to='/cart'><i className="fa-solid fa-cart-shopping ms-4 mb-2 text-dark"></i><span style={span}>{cartCount}</span></NavLink>
        </div>
      </div>
      
    </>


  )
}
export default Nav