import React, { useEffect } from "react";
import img from "../assets/timeline1.jpg";
import "../css/Accept.css";
import axios from "axios";
import { useState } from "react";
import AcceptCard from "./AcceptCard";
const Accept = () => {
    const [donations, setDonations] = useState([]);
    async function getAllDonations() {
        try {
            const response = await axios.get("http://localhost:1234/donates");
            console.log(response);
            setDonations(response.data.data);
        } catch (error) {
            console.log("something happen in API calling");
            console.log(error);
            throw { error };
        }
    }
    useEffect(() => {
        getAllDonations();
    }, []);

    console.log(donations.length);
    if (donations.length == 0 || !donations) return <h1>Loading</h1>;

    return (
        <>
            {donations.map((Object) => {
                return <AcceptCard {...Object} />;
            })}
        </>
    );
};

export default Accept;
