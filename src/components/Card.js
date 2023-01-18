import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <section className="card-container">
      {badgeText && <div className="card-tag">{badgeText}</div>}
      <img src={`${props.coverImg}`} alt="card 1" className="card-img" />
      <div className="card-details">
        <div className="card-details_first">
          <img src="Star.png" alt="rating stars" className="star-img" />
          <span className="rating">{props.rating}</span>
          <span className="rating_no">&#40;{props.reviewCount}&#41;</span>
          <span className="dash">&#45;</span>
          <span className="location">{props.location}</span>
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
