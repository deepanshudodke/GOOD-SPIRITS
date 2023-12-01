import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";
import { useContext } from "react";
const LogIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const data = useContext(UserContext);
    const [haveToken, setHaveToken] = useState(false);

    const handleInput = (e) => {
        const inputField = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [inputField]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:1234/login", user)
            .then(async function (response) {
                const token = response.data.data;
                console.log(token);
                sessionStorage.setItem("auth-token", token);
                setHaveToken(true);
                const tokenResponse = await axios.get(
                    "http://localhost:1234/isAuthenticated",

                    { headers: { "auth-token": token } }
                );

                data.setUserData({
                    token: token,
                    user: tokenResponse.data.data,
                    loggedIn: true
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    if (haveToken) {
        return <Navigate to={"/dashboard"} />;
    }
    return (
        <div className="outer-box">
            <h1 className="big-text">Login</h1>
            <div className="inner-box">
                <header className="signup-header">
                    <h1>Let's logged you IN</h1>
                </header>
                <main className="signup-body">
                    <form action="#" onSubmit={handleSubmit}>
                        <p>
                            <label for="email">Email address</label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="on"
                                value={user.email}
                                onChange={handleInput}
                                id="email"
                                placeholder="example@gmail.com"
                                required
                            ></input>
                        </p>

                        <p>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                id="password"
                                placeholder="password"
                                required
                            ></input>
                        </p>

                        <p>
                            <input
                                type="submit"
                                id="submit"
                                value="Login"
                            ></input>
                        </p>
                    </form>
                </main>
                <footer className="signup-footer">
                    <p>
                        Not have an account?
                        <Link to={"/register"}>Register</Link>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default LogIn;
