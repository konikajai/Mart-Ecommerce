import React from "react";
import tableImage from "../../assets/table.jpg";

function Banner() {
  return (
    <>
      <section style={{height: '300px'}}>
          <img style={{objectFit: 'cover'}} src={tableImage} className="d-block w-100 h-100 img-fluid" alt="banner" />
      </section>
    </>
  );
}

export default Banner;
