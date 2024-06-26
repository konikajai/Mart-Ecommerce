import React from 'react'

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
    return (
        <>
            <section>
                <h3 className='text-center mt-5 '>Shop Category</h3>
                <div className='container'>
                    <div className="row row-cols-lg-3 g-4 py-5">
                        {Shop.map((data) => (
                            <div key={data.id} style={card} className='card mb-4'>
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
                                        <button><i className="fa-solid fa-plus"></i></button>
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

export default ShopCategory
