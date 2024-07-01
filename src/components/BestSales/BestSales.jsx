import React from 'react'

import './BestSales.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductAction/ProductAction';
import { NavLink } from 'react-router-dom';

import Loader, {notify} from '../Loader/Loader';

const card = {
    width: '16rem',
    height: '20rem',
    border: '1px solid rgba(0, 0, 0,0.1)',
    margin: '20px'
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

const renderStars = (avgRating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= avgRating) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        } else {
            stars.push(<i key={i} className="fa-regular fa-star"></i>);
        }
    }
    return stars;
};

function BestSales({ sales }) {
    const dispatch = useDispatch();

    const addToCartHandler = (data) => {
        dispatch(addToCart(data));
        notify();
    };

    return (
        <>
            <section style={{background: '#f2f4f7'}}>
                <h3 className='text-center mt-5 '>Best Sales</h3>
                <div style={{marginLeft: '200px'}}  className='container'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5 ms-2">
                        {sales.map((data) => (                         
                                <div key={data.id} style={card} className='card mb-4'>
                                <i style={heart} className="fa-regular fa-heart"></i>
                                <NavLink style={{textDecoration:'none',color:'black'}} to={`/Products/${data.id}`}>
                                <img style={image} src={data.imgUrl} className="card-img-top" alt="sofa" />
                                <div className="card-body">
                                    <h5 className="card-title h-75">{data.productName}</h5>
                                    <div style={{ color: 'orange' }}>
                                            {renderStars(data.avgRating)}
                                        </div>
                                </div>
                                </NavLink>
                                <div className="card-body">
                                    <div className='row row-cols-md-2'>
                                        <h5>{data.price}$</h5>
                                        <i className="fa-solid fa-plus" onClick={() => {addToCartHandler(data)}}></i>
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

export default BestSales
