import React, { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import "../css/Requests.css";
import RequestCard from "./RequestCard";
const Requests = () => {
    const data = useContext(UserContext);
    const id = data.userData.user.id;
    const [requests, setRequests] = useState([]);
    async function getAllRequests() {
        try {
            let response = await axios.get("http://localhost:1234/requests", {
                params: {
                    id: id
                }
            });

            setRequests(response.data.data);
        } catch (error) {
            console.log("something happen in API calling");
            console.log(error);
        }
    }

    console.log("req", requests);
    useEffect(() => {
        getAllRequests();
    }, []);
    return (
        <div className="requests-container">
            {requests.map((request) => {
                return <RequestCard {...request} />;
            })}
        </div>
    );
};

export default Requests;
