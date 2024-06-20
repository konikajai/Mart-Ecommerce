import React from 'react'
import '../SearchBar/SearchBar'
import BestSales from '../BestSales/BestSales'
import Footer from '../Footer/Footer'
const search = {
    width: '180px',
    height: '30px'
}
const ul={
    listStyle:'none',
    position:'relative',
    top:'30px',
    boxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
    width:'300px'
}
const input ={
    width:'500px',
    height:'35px',
    borderRadius:'15px',
    border:'1px solid grey'
}
const icon={
    position:'relative',
    right:'30px',
    fontSize:'20px',
    opacity:'0.6'
}
function SearchBar() {
    return (
        <>
        <section className='d-flex justify-content-around mt-5'>
        <div style={search} className='border border-dark '>
            <label for="exampleSelect1">Filter By Category</label>
            <ul style={ul}>
                <li>Sofa</li>
                <li>Chair</li>
                <li>Watch</li>
                <li>Mobile</li>
                <li>Wireless</li>
            </ul>
        </div>
        <div>
            <input style={input} type="text" placeholder='Search'/>
            <i class="fa-solid fa-magnifying-glass" style={icon}></i>
        </div>
        </section>
        <BestSales/>
        <Footer/>
        </>
    )
}
export default SearchBar