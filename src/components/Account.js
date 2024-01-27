import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import "../css/Account.css";
const Account = () => {
    let data = useContext(UserContext);
    data = data.userData.user;

    return (
        <>
            <div className="account">
                <h2>ACCOUNT DETAILS</h2>

                <hr />
                <div className="user-profile-card">
                    <h3>Name : {data?.name}</h3>
                    <h3>Email Address : {data?.email}</h3>
                    <h3>Phone No. : {data?.phone}</h3>
                    <h3>Profile Type : {data?.type}</h3>
                </div>
            </div>
        </>
    );
};

export default Account;
