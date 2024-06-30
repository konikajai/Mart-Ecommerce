import React, { useState } from 'react'
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

function NewArr({ newArrivals }) {

    const [number,setNumber] = useState()

    function increaseNumber(){
        number++;
        setNumber(number)
    }

    
    function decreaseNumber(){
        number--;
        setNumber(number)
    }

    const dispatch = useDispatch();
    console.log(newArrivals)
    return (
        <>
            <section>
                <h3 className='text-center mt-5 '>New Arrivals</h3>
                <div style={{marginLeft: '140px'}} className='container'>
                    <div className="row row-cols-md-4 g-4 py-5 ms-2">
                        {newArrivals.map((data) => (
                            <div key={data.id} style={card} className='card mb-4'>
                                <i style={heart} className="fa-regular fa-heart"></i>
                                <NavLink style={{textDecoration:'none',color:'black'}} to={`/Products/${data.id}`}>
                                    <img style={image} src={data.imgUrl} className="card-img-top" alt="sofa" />
                                    <div className="card-body">
                                        <h5 className="card-title h-50">{data.productName}</h5>
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
            </section >
        </>
    )
}

export default NewArr
