import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/AboutFood.css";
import PrintImages from "./PrintImages";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const AboutFood = () => {
    const data = useContext(UserContext);
    const curr_user_id = data.userData.user.id;
    const { id } = useParams();
    const body = {
        id: id
    };
    const [foodItem, setFoodItem] = useState({});
    const [user, setUser] = useState({
        food_id: "",
        donor_id: "",
        acceptor_id: ""
    });

    const handleFoodRequest = async () => {
        setUser({
            food_id: foodItem.id,
            donor_id: foodItem.userId,
            acceptor_id: curr_user_id
        });
        console.log("hello", user);

        try {
            const response = await axios.post(
                "http://localhost:1234/request",
                user
            );
            console.log(response);
        } catch (error) {
            if (
                error.response.data.err.error.name ==
                "SequelizeUniqueConstraintError"
            )
                alert("Already Requested");
        }
    };

    useEffect(() => {
        async function fetchIndividualFoodItem() {
            try {
                const response = await axios.get(
                    "http://localhost:1234/donate",
                    {
                        params: {
                            id: id
                        }
                    }
                );

                setFoodItem(response.data.data);
            } catch (error) {}
        }

        fetchIndividualFoodItem();
    }, []);
    return (
        <div className="about-food-container container">
            <h1>FOOD DETAILS</h1>
            <div className="food-grid">
                <p>Food Name</p>
                <p>{foodItem.foodName}</p>
                <p>Food Description</p>
                <p>{foodItem.description}</p>
                <p>Number of servings</p>
                <p>{foodItem.servings}</p>
                <p>Pickup date</p>
                <p>{new Date(foodItem.pickupDate).toUTCString()}</p>
                <p>Contact person name</p>
                <p>{foodItem.contactPersonName}</p>
                <p>Phone number</p>
                <p>{foodItem.phoneNumber}</p>
                <p>Address</p>
                <p>{foodItem.address}</p>
                <p>Expire In</p>
                <p>{foodItem.expiry} hours</p>
                <p>Photos</p>
                <p>
                    {foodItem?.photo?.split(",").map((image) => {
                        return <PrintImages img={image} />;
                    })}
                </p>
            </div>

            <div className="request-btn">
                <span onClick={handleFoodRequest}>Request food</span>
            </div>
        </div>
    );
};

export default AboutFood;
