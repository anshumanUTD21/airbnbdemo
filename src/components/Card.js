import React from "react";

function Card(props) {
  console.log(props);
  return (
    <section className="card-container">
      <img src={`${props.img}`} alt="card 1" className="card-img" />
      <div className="card-details">
        <div className="card-details_first">
          <img src="Star.png" alt="rating stars" className="star-img" />
          <span className="card-tag">SOLD OUT</span>
          <span className="rating">{props.rating}</span>
          <span className="rating_no">&#40;{props.reviewCount}&#41;</span>
          <span className="dash">&#45;</span>
          <span className="country">{props.country}</span>
        </div>
        <div className="card-details_desc">
          <span className="trainer-detail">{props.title}</span>
        </div>
        <div className="card-price">
          <span className="price-detail">
            <span className="price">From ${props.price}</span>/ Person
          </span>
        </div>
      </div>
    </section>
  );
}

export default Card;
