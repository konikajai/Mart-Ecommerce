import React from "react";
import tableImage from "../../assets/table.jpg";

// const h2 ={
//   position : 'relative',
//   bottom: '200px',
//   left: '400px'
// }

function Banner() {
  return (
    <>
      <section style={{height: '300px'}}>
          <img style={{objectFit: 'cover'}} src={tableImage} className="d-block w-100 h-100 img-fluid" alt="banner" />
          <h2>Product</h2>
      </section>
    </>
  );
}

export default Banner;
