import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const navbar = {
  boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
  height: '100px',
};

const span = {
  padding: '0px 3px',
  borderRadius: '50%',
  color: 'white',
  fontSize: '10px',
  backgroundColor: 'rgb(4, 4, 71)',
  position: 'relative',
  bottom: '10px',
  right: '3px',
};

function Nav() {
  const cartData = useSelector((state) => state.productData.cartData);
  const cartCount = cartData.reduce((total, product) => total + product.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbar}>
      <div className="container">
        <div className="navbar-brand d-flex align-items-center">
          <img style={{ width: '200px', height: '70px' }} src={logo} alt="logo" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' , cursor: 'pointer'}} to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', cursor: 'pointer'}} to='../shop'>Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', cursor: 'pointer'}} to='/cart'>Cart</NavLink>
            </li>
            <li className="nav-item d-flex align-items-center">
              <i className="fa-solid fa-user ms-3 mb-2"></i>
              <NavLink className="nav-link" to='/cart'>
                <i className="fa-solid fa-cart-shopping ms-4 mb-2 text-dark"></i>
                <span style={span}>{cartCount}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
