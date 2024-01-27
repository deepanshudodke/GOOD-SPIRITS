import React from "react";
import { Link } from "react-router-dom";

const AcceptCard = (data) => {
    let photos = data.photo.split(",");
    console.log(photos);
    return (
        <div className="accept-card">
            <div className="accept-main-img">
                <img src={"http://localhost:1234/uploads/" + photos[0]} />
            </div>
            <div className="accept-content">
                <p>
                    Food Name -{" "}
                    <span> {data.foodName.split(",").join(", ")} </span>
                </p>

                <p className="food-description">
                    Food description - <span>{data.description}</span>
                </p>
                <p>
                    Contact Person Name - <span> {data.contactPersonName}</span>
                </p>
                <p>
                    Address - <span>{data.address}</span>
                </p>

                <p className="more-btn">
                    <Link to={"/dashboard/" + data.id}>Know more &#11106;</Link>
                </p>
            </div>
        </div>
    );
};

export default AcceptCard;
