import React from 'react'
// import './Nav.css'
// import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const navbar={
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
  height:'80px',

}
const ul = {
  listStyle:'none'
}

function Nav() {
  const navlink = {
      cursor:'pointer',
      fontSize:'17px',
      margin:'20px',
      // color:isactive ?'green':'red',
      //   fontSize:isactive ?'16px':'14px'
    } 

  return (
    <div className='navbar d-flex justify-content-around align-items-center' style={navbar}>
        <div className='logo d-flex align-items-center'>
        <i className="fa-solid fa-bag-shopping me-3"></i>
        <h2>MART</h2>
        </div>
        <div className='nav d-flex align-items-center'>
        <ul className='d-flex text-center' style={ul}>
            <li style={navlink}><NavLink to='/'>Home</NavLink></li>
            <li style={navlink}><NavLink to='/shop'>Shop</NavLink></li>
            <li style={navlink}><NavLink to='/cart'>Cart</NavLink></li>
        </ul>
        <i className="fa-solid fa-user me-3 mb-2"></i>
        <i className="fa-solid fa-cart-shopping mb-2"></i>
        </div>
    </div>
  )
}
export default Nav