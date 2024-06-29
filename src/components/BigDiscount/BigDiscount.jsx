import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductAction/ProductAction';

const card = {
    width: '16rem',
    height: '20rem',
    border: '1px solid rgba(0, 0, 0,0.1)'
}
const button = {
    width: '60px',
    height: '20px',
    borderRadius: '10px',
    border: 'none',
    lineHeight: '10px',
    fontSize: '10px',
    bottom: '270px',
    position: 'absolute',
    zIndex: '1'
}
const heart = {
    left: '220px',
    bottom: '270px',
    position: 'absolute',
    width: '30px',
    zIndex: '1'
}
const image = {
    width: '13rem',
    height: '9rem',
    objectFit: 'contain',
    position: 'relative',
    zIndex: '0'
}

function BigDiscount({ Product }) {
    const dispatch = useDispatch();
    console.log(Product)
    return (
        <>
            <section>
                <h3 className='text-center mt-5'>Big Discount</h3>
                <div style={{marginLeft: '140px'}} className='container'>
                    <div className="row row-cols-md-4 g-4 py-5 ms-2">
                        {Product.map((data) => (
                            <div key={data.id} style={card} className='card mb-4'>
                                <button style={button} className='btn btn-primary text-center'>{data.discount}%Off</button>
                                <i style={heart} className="fa-regular fa-heart"></i>
                                <NavLink style={{textDecoration:'none',color:'black'}} to={`/Products/${data.id}`}>
                                    <img style={image} src={data.imgUrl} className="card-img-top" alt="sofa" />
                                    <div className="card-body">
                                        <h5 className="card-title h-75">{data.productName}</h5>
                                        <div style={{color: 'orange'}}>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                            <i className="fa-regular fa-star"></i>
                                        </div>
                                    </div>
                                </NavLink>
                                <div className="card-body">
                                    <div className='row row-cols-md-2'>
                                        <h5>{data.price}$</h5>
                                        <i className="fa-solid fa-plus" onClick={() => { dispatch(addToCart(data)) }}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BigDiscount
