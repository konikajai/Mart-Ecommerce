import React from 'react'

import { useState } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductAction/ProductAction'

import { CiCirclePlus } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

import { notify } from '../loader/Loader';
import { renderStars } from '../ratings/Ratings';

const inputdata = {
    width: '500px',
    height: '35px',
    borderRadius: '15px',
    border: '1px solid grey'
}
const card = {
    height: '19rem',
    border: '1px solid rgba(0, 0, 0,0.1)',
}
const heart = {
    position: 'absolute',
    right: '10px',
    top:'10px',
    zIndex: '1'
}
const image = {
    height: '9rem',
    zIndex: '0'
}
const plus = {
    fontSize: '25px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none'
}

function ShopCategory({ Shop }) {

    // console.log(Shop);

    const [value, setValue] = useState('Sofa')
    const [input, setInput] = useState('')

    const options = [
        { value: "Sofa", label: "Sofa" },
        { value: "Chair", label: "Chair" },
        { value: "Watch", label: "Watch" },
        { value: "Mobile", label: "Mobile" },
        { value: "Wireless", label: "Wireless" },
    ]
    //    function selectValue(e){
    //         setValue(e.target.value);
    //     }

    function handleValue(option) {
        setValue(option ? option.value : '');
    }
    function handleInput(e) {
        setInput(e.target.value);
    }

    const dispatch = useDispatch();

    // console.log(value + "val"); 
    // console.log(input + "in");
    // console.log(Product + "pro");

    const filteredProducts = Shop.filter((product) => {
        return (
            (value ? product.category.toLowerCase() === value.toLowerCase() : true) &&
            (input ? product.productName.toLowerCase().includes(input.toLowerCase()) : true)
        );
    });

    // const filteredProducts = Shop.filter((product) => (
    //     (value && input) && 
    //     (product.category.toLowerCase() === value.toLowerCase()) &&
    //     (product.productName.toLowerCase().includes(input.toLowerCase()))
    // ));

    console.log(filteredProducts);

    const addToCartHandler = (data) => {
        dispatch(addToCart(data));
        notify();
    };

    return (
        <>
            <h2 style={{ top: '260px' }} className='position-absolute start-50 translate-middle fs-2 my-2 text-center'>Product</h2>
            <section className='container d-flex justify-content-around mt-5'>
                <Select style={{ color: 'white', backgroundColor: 'blue' }} onChange={handleValue} options={options} placeholder="Filter By Category" />
                {/* <div>{value}</div> */}

                {/* <select name="" id="">
                    {options.map(option =>
                        <option value={option.value}>{option.label}</option>)}
                </select> */}

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-md-8 col-lg-6 position-relative">
                            <input onChange={handleInput} className="form-control rounded-pill" type="text" placeholder='Search' />
                            <i className="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle-y pe-3"
                                style={{ cursor: 'pointer' }}
                            ></i>
                        </div>
                    </div>
                    {/* <span>{input}</span> */}
                </div>

                {/* <div>
                    <input onChange={handleInput} style={inputdata} type="text" placeholder='Search' />
                    <i style={icon} className="fa-solid fa-magnifying-glass"></i>
                    <span>{input}</span>
                </div> */}
            </section>
            <section>
                <h3 className='text-center my-5'>Shop Category</h3>
                <div className='container'>
                    <div className="row row-cols-md-3 mx-auto w-75 g-4">
                        {filteredProducts.length === 0 ? (<div>NO PRODUCT</div>) : (filteredProducts.map((data, index) => (
                            <div className='column'>
                                <div key={index} style={card} className='card mb-4'>
                                    <FaRegHeart style={heart} />
                                    <img style={image} src={data.imgUrl} className="card-img-top object-fit-contain rounded mx-auto d-block" alt="sofa" />
                                    <div className="card-body">
                                        <h5 className="card-title h-75">{data.productName}</h5>
                                        <div style={{ color: 'orange' }}>
                                            {renderStars(data.avgRating)}
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
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
                        )))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopCategory
