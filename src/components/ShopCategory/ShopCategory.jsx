import React from 'react'

import { useState } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductAction/ProductAction'

const inputdata = {
    width: '500px',
    height: '35px',
    borderRadius: '15px',
    border: '1px solid grey'
}
const icon = {
    position: 'relative',
    right: '30px',
    fontSize: '20px',
    opacity: '0.6'
}

const card = {
    width: '16rem',
    height: '20rem',
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
    return (
        <>
            <section className='d-flex flex-wrap justify-content-around mt-5'>
                <Select style={{ color: 'white', backgroundColor: 'blue' }} onChange={handleValue} options={options} placeholder="Filter By Category" />
                {/* <div>{value}</div> */}
                
                {/* <select name="" id="">
                    {options.map(option =>
                        <option value={option.value}>{option.label}</option>)}
                </select> */}
               <div>
                    <input onChange={handleInput} style={inputdata} type="text" placeholder='Search' />
                    <i style={icon} className="fa-solid fa-magnifying-glass"></i>
                    {/* <span>{input}</span> */}
                </div>
            </section>
            <section> 
                <h3 className='text-center mt-5 '>Shop Category</h3>
                <div className='container'>
                    <div className="row row-cols-lg-3 g-4 py-5">
                        {filteredProducts.length===0?(<div>NO PRODUCT</div>):(filteredProducts.map((data,index) => (
                            <div key={index} style={card} className='card mb-4'>
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
                                <div className="card-body">
                                    <div className='row row-cols-lg-2'>
                                        <h5>{data.price}$</h5>
                                        <i className="fa-solid fa-plus" onClick={() => { dispatch(addToCart(data)) }}></i>
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
