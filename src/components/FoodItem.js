import React from "react";
import cross from "../assets/cross.png";
const FoodItem = (prop) => {
    const deleteItem = (index) => {
        prop.setFoodItems((oldItems) => {
            return oldItems.filter((ele, i) => i !== index);
        });
    };
    return (
        <div className="food-item">
            <p>
                {prop.name}{" "}
                <span onClick={() => deleteItem(prop.index)}>&#10060;</span>
            </p>
        </div>
    );
};

export default FoodItem;
