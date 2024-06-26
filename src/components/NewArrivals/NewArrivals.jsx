import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductAction/ProductAction';

const card = {
    width: '16rem',
    height: '19rem',
    border: '1px solid rgba(0, 0, 0,0.1)'
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
const rating = {
    color: 'orange'
}
function NewArr({ newArrivals }) {
    const dispatch = useDispatch();
    console.log(newArrivals)
    return (
        <>
            <section className='container'>
                <h3 className='text-center mt-5 '>New Arrivals</h3>
                <div className="row row-cols-lg-3 g-4 py-5">
                    {newArrivals.map((data) => (
                        <NavLink to={`/Products/${data.id}`}>
                            <div key={data.id} style={card} className='card mb-4'>
                                <i style={heart} className="fa-regular fa-heart"></i>
                                <img style={image} src={data.imgUrl} className="card-img-top" alt="sofa" />
                                <div className="card-body">
                                    <h5 className="card-title h-50">{data.productName}</h5>
                                    <div style={rating}>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className='row row-cols-lg-2'>
                                        <h5>{data.price}$</h5>
                                        <i className="fa-solid fa-plus" onClick={() => { dispatch(addToCart(data)) }}></i>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </section>
        </>
    )
}

export default NewArr
