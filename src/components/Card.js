import React from "react";

function Card() {
  return (
    <section className="card-container">
      <img src="/image1.png" alt="card 1" className="card-img" />
      <div className="card-details">
        <div className="card-details_first">
          <img src="Star.png" alt="rating stars" className="star-img" />
          <span className="card-tag">SOLD OUT</span>
          <span className="rating">5</span>
          <span className="rating_no">&#40;6&#41;</span>
          <span className="dash">&#45;</span>
          <span className="country">USA</span>
        </div>
        <div className="card-details_desc">
          <span className="trainer-detail">
            Life lessons with Katie Zaferes
          </span>
        </div>
        <div className="card-price">
          <span className="price-detail">
            <span className="price">From $136 </span>/ Person
          </span>
        </div>
      </div>
    </section>
  );
}

export default Card;
