import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../css/AboutFood.css";
const AboutFood = () => {
    const { id } = useParams();
    const body = {
        id: id
    };
    const [foodItem, setFoodItem] = useState({});
    console.log(foodItem);
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
            AboutFood - {foodItem.contactPersonName}
        </div>
    );
};

export default AboutFood;
