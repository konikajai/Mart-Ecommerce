import React, { useState } from 'react'

import Select from 'react-select'

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
function SearchBar() {

    const [value, setValue] = useState('')
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
    return (
        <>
            <section className='d-flex flex-wrap justify-content-around mt-5'>
                <Select style={{color: 'white', backgroundColor : 'blue'}} onChange={handleValue} options={options} placeholder="Filter By Category" />
                <div>{value}</div>
                {/* <select name="" id="">
                    {options.map(option =>
                        <option value={option.value}>{option.label}</option>)}
                </select> */}
                <div>
                    <input onChange={handleInput} style={inputdata} type="text" placeholder='Search'/>
                    <i style={icon} className="fa-solid fa-magnifying-glass"></i>
                    <span>{input}</span>
                </div>
            </section>
        </>
    )
}
export default SearchBar