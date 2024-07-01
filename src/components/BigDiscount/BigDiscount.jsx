import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/ProductAction/ProductAction';
import { notify } from '../loader/Loader';
import { renderStars } from '../ratings/Ratings';
import { CiCirclePlus } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";


const card = {
    height: '19rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
};
const offer = {
    fontSize: '10px',
    width: '40px',
    height: '17px',
    textAlign: 'center',
    position: 'absolute',
    top:'10px',
    left:'10px',
    zIndex: '1',
    bottom: '280px',
    color: 'white',
    backgroundColor: 'rgb(4, 4, 71)'
}
const heart = {
    position: 'absolute',
    right:'10px',
    top: '10px',
    zIndex: '1'
};
const image = {
    height: '9rem',
    zIndex: '0'
};
const plus = {
    fontSize: '25px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none'
}

function BigDiscount({ Product }) {
    const dispatch = useDispatch();
    console.log(Product);

    const addToCartHandler = (data) => {
        dispatch(addToCart(data));
        notify();
    };

    return (
        <>
            <section className='py-2 my-4' style={{ background: '#f2f4f7' }}>
                <h3 className="text-center my-4">Big Discount</h3>\
                <div className="container">
                    <div className="row row-cols-md-3 mx-auto w-75 g-4">
                        {Product.map((data) => (
                            <div className='column'>
                                <div key={data.id} style={card} className="card mb-4">
                                    <div style={offer} className="rounded-pill">{data.discount}%Off</div>
                                    <FaRegHeart style={heart} />
                                    <NavLink style={{ textDecoration: 'none', color: 'black' }} to={`/Products/${data.id}`}>
                                        <img style={image} src={data.imgUrl} className="card-img-top object-fit-contain rounded mx-auto d-block" alt="sofa" />
                                        <div className="card-body">
                                            <h6 className="card-title">{data.productName}</h6>
                                            <div style={{ color: 'orange' }}>{renderStars(data.avgRating)}</div>
                                        </div>
                                    </NavLink>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5>{data.price}$</h5>
                                            <CiCirclePlus onMouseOver={(e) => {
                                                e.currentTarget.style.color = 'white';
                                                e.currentTarget.style.backgroundColor = 'rgb(4, 4, 71)'
                                            }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.color = 'black';
                                                    e.currentTarget.style.backgroundColor = 'white';
                                                }}
                                                style={plus} onClick={() => addToCartHandler(data)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BigDiscount;
