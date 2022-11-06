import React from "react";
import Star from "../../public/images/star.png";

const Card = (props) => {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card-container">
            <div className="img-container" style={{
                backgroundImage: `url(../public/images/${props.item.coverImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width:'176px',
                height:'235px',
            }}>
                {badgeText && <p className="card-stats">{badgeText}</p>}
            </div>
            <div className="details">
                <img src={Star} alt="Star" className="star" />
                <span>{props.item.stats.rating}</span>
                <span>({props.item.stats.reviewCount}) • </span>
                <span>{props.item.location}</span>
            </div>
            <p className="desc">{props.item.title}</p>
            <p className="pricing"><strong>From ${props.item.price}</strong> / person</p>
        </div>
    )
}

export default Card;
