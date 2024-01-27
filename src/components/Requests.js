import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
const Requests = () => {
    const data = useContext(UserContext);
    console.log("hahaha" + data.userData.user.id);
    const id = data.userData.user.id;

    async function getAllRequests() {
        try {
            const response = await axios.get("http://localhost:1234/requests", {
                params: {
                    id: id
                }
            });
            console.log(response);
        } catch (error) {
            console.log("something happen in API calling");
            console.log(error);
        }
    }
    useEffect(() => {
        getAllRequests();
    }, []);
    return <div>Requests</div>;
};

export default Requests;
