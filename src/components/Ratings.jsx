import React from 'react'

export const renderStars = (avgRating) => {
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

function Ratings() {
    return(
        <>
        </>
    )
}

export default Ratings