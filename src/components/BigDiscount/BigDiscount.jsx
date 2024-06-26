import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductAction/ProductAction';


const card = {
    width: '15rem',
    height: '19rem',
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
    left: '200px',
    bottom: '270px',
    position: 'absolute',
    width: '30px',
    zIndex: '1'
}
const image = {
    width: '12rem',
    height: '8rem',
    objectFit: 'contain',
    position: 'relative',
    zIndex: '0'
}
const rating = {
    color: 'orange'
}

function BigDiscount({ Product }) {
    const dispatch = useDispatch();
    console.log(Product)
    return (
        <>
            <section className='container'>
                <h3 className='text-center mt-5 '>Big Discount</h3>
                <div className="row row-cols-md-4 g-4 py-5">
                    {Product.map((data) => (
                        <div key={data.id} style={card} className='card mb-4'>
                            <NavLink to={`/Products/${data.id}`}>
                                <button style={button} className='btn btn-primary text-center'>{data.discount}%Off</button>
                                <i style={heart} className="fa-regular fa-heart"></i>
                                <img style={image} src={data.imgUrl} className="card-img-top" alt="sofa" />
                                <div className="card-body">
                                    <h5 className="card-title h-75">{data.productName}</h5>
                                    <div style={rating}>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="card-body">
                                <div className='row row-cols-lg-2'>
                                    <h5>{data.price}$</h5>
                                   <i className="fa-solid fa-plus" onClick={() => { dispatch(addToCart(data)) }}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default BigDiscount
