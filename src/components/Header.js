import mainlogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
    const data = useContext(UserContext);
    console.log(data);
    const handleLogOut = () => {
        data.setUserData({
            token: undefined,
            user: undefined,
            loggedIn: false
        });
        sessionStorage.removeItem("auth-token");
    };
    return (
        <>
            <div className="header container">
                <div className="title">
                    <img src={mainlogo} />
                    <h2>GOOD SPIRITS</h2>
                </div>
                <ul className="nav-list">
                    {data.userData.loggedIn && (
                        <li style={{ fontWeight: 600 }}>
                            @{data.userData.user.name}
                        </li>
                    )}
                    {data.userData.loggedIn && (
                        <li>
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                    )}
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/service"}>Service</Link>
                    </li>
                    <li>
                        <Link to={"/donate"}>Donate</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    {!data.userData.loggedIn && (
                        <li className="auth-btn">
                            <Link to={"/register"}>Register</Link>
                        </li>
                    )}
                    {!data.userData.loggedIn && (
                        <li className="auth-btn">
                            <Link to={"/login"}>Log in</Link>
                        </li>
                    )}
                    {data.userData.loggedIn && (
                        <li className="auth-btn" onClick={() => handleLogOut()}>
                            <Link>Log out</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Header;
