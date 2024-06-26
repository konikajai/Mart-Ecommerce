import React from "react";
import tableImage from "../../assets/table.jpg";

const section = {
  height: "300px"
}
const image ={
    objectFit: "cover"
}
function Banner() {
  return (
    <>
      <section style={section}>
          <img style={image} src={tableImage} className="d-block w-100 h-100 img-fluid" alt="banner" />
      </section>
    </>
  );
}

export default Banner;
