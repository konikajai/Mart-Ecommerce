import React from 'react'

const h3 = {
    marginTop:'130px'
}
const backimg = {
    backgroundImage: `url('../../../../images/table.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width:'100%',
    height:'300px'
}
function Banner() {
    return (
        <>
            <section style={backimg}>
                <div className='d-flex justify-content-center'>
                    <h3 style={h3}>Product</h3>
                </div>
            </section>
        </>
    )
}

export default Banner