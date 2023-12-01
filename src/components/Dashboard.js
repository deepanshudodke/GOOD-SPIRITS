import { useState } from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import Donate from "./Donate";
import Requests from "./Requests";
import Account from "./Account";
import Accept from "./Accept";
const Dashboard = () => {
    const [tab, setTab] = useState("donate");

    return (
        <>
            <div className="dashboard container">
                <h2>Dashboard</h2>
                <div className="horizontal-tabs">
                    <Link onClick={() => setTab("account")}>Account</Link>
                    <Link onClick={() => setTab("donate")}>Donate </Link>
                    <Link onClick={() => setTab("accept")}>Accept</Link>
                    <Link onClick={() => setTab("requests")}>Requests</Link>
                </div>
                <hr />
                {tab === "donate" && <Donate />}
                {tab === "accept" && <Accept />}
                {tab === "requests" && <Requests />}
                {tab === "account" && <Account />}
            </div>
        </>
    );
};

export default Dashboard;
