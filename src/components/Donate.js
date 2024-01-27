import React, { useState } from "react";
import "../css/Donate.css";
import FoodItem from "./FoodItem";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Donate = () => {
    const [foodItems, setFoodItems] = useState([]);
    let userData = useContext(UserContext);
    userData = userData.userData.user;
    console.log(userData);
    const temp = {
        foodName: "",
        description: "",
        servings: "",
        pickupDate: "",
        contactPersonName: "",
        phoneNumber: "",
        address: "",
        expiry: "",
        type: ""
    };
    const [data, setData] = useState({
        foodName: "",
        description: "",
        servings: "",
        pickupDate: "",
        contactPersonName: "",
        phoneNumber: "",
        address: "",
        expiry: "",
        type: ""
    });

    const [image, setImage] = useState([]);
    const handleInput = (e) => {
        const inputField = e.target.name;
        const value = e.target.value;
        setData({ ...data, [inputField]: value });
    };

    const handleImage = (e) => {
        setImage(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        setData({ ...data, ["foodName"]: foodItems, userId: userData.id });
        const newData = JSON.stringify(data);

        formData.append("data", newData);

        for (let i = 0; i < image.length; i++) {
            formData.append("photo", image[i]);
        }

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        try {
            const response = await axios.post(
                "http://localhost:1234/donate",
                formData,
                config
            );
            setData(temp);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="donate">
                <h2>DONATE FOOD FORM</h2>
                <hr />
                <form
                    action="post"
                    className="donate-form"
                    onSubmit={handleSubmit}
                >
                    <div className="add-item">
                        <div className="food-container">
                            <h3> FOOD NAME </h3>
                            <input
                                type="text"
                                placeholder="FOOD ITEM NAME"
                                value={data.foodName}
                                onChange={handleInput}
                                name="foodName"
                                autoComplete="on"
                            />

                            <span
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (data.food != "") {
                                        setFoodItems((oldItems) => {
                                            return [...oldItems, data.foodName];
                                        });

                                        setData({ ...data, foodName: "" });
                                    }
                                }}
                            >
                                {" "}
                                &#129134;
                            </span>
                            {foodItems.map((item, index) => {
                                return (
                                    <FoodItem
                                        key={index}
                                        index={index}
                                        name={item}
                                        foodItems={foodItems}
                                        setFoodItems={setFoodItems}
                                    />
                                );
                            })}
                        </div>

                        <div className="description-container">
                            <h3> DESCRIPTION ABOUT FOOD </h3>
                            <textarea
                                type="textarea"
                                autoComplete="on"
                                placeholder="DESCRIPTION"
                                name="description"
                                value={data.description}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="servings">
                            <h3> SERVINGS </h3>
                            <input
                                type="text"
                                autoComplete="on"
                                placeholder="SERVINGS"
                                value={data.servings}
                                onChange={handleInput}
                                name="servings"
                            />
                        </div>
                        <div className="pickup-container">
                            <h3> PICKUP DATE </h3>
                            <input
                                type="date"
                                autoComplete="on"
                                placeholder="DATE"
                                value={data.pickupDate}
                                onChange={handleInput}
                                name="pickupDate"
                            />
                        </div>

                        <div className="contact-person">
                            <h3> CONTACT PERSON </h3>
                            <input
                                type="text"
                                autoComplete="on"
                                placeholder="PERSON NAME"
                                value={data.contactPersonName}
                                onChange={handleInput}
                                name="contactPersonName"
                            />
                        </div>

                        <div className="phone">
                            <h3> PHONE NUMBER </h3>
                            <input
                                type="text"
                                autoComplete="on"
                                placeholder="PHONE NO."
                                value={data.phoneNumber}
                                onChange={handleInput}
                                name="phoneNumber"
                            />
                        </div>

                        <div className="address-container">
                            <h3> FULL ADDRESS </h3>
                            <textarea
                                autoComplete="on"
                                type="textarea"
                                placeholder="ADDRESS"
                                name="address"
                                value={data.address}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="expiry">
                            <h3> FOOD EXPIRY [IN HOURS] </h3>
                            <input
                                type="text"
                                autoComplete="on"
                                placeholder="EXPIRE IN"
                                value={data.expiry}
                                onChange={handleInput}
                                name="expiry"
                            />
                        </div>

                        <div className="type">
                            <h3> ACCEPTER TYPE </h3>
                            <select name="type" id="type">
                                <option value={(data.type = "Individual")}>
                                    Individual
                                </option>
                                <option value={(data.type = "Organization")}>
                                    Organization
                                </option>
                                <option value={(data.type = "Both")}>
                                    Both
                                </option>
                            </select>
                        </div>

                        <div className="upload">
                            <input
                                type="file"
                                accept="image/*"
                                name="file"
                                id="file"
                                multiple
                                onChange={handleImage}
                            />
                        </div>

                        <div className="submit-form">
                            <input
                                type="submit"
                                id="submit"
                                value="Donate"
                            ></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Donate;
