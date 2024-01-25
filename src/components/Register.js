import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "../css/Register.css";
import axios from "axios";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        type: "Individual"
    });
    const [clicked, setClicked] = useState(false);
    const handleInput = (e) => {
        const inputField = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [inputField]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.password != user.confirmpassword) {
            alert("Password and Confirm Password are not same");
            return;
        }
        axios
            .post("http://localhost:1234/register", user)
            .then(function (response) {
                alert("Successfully Registered");
                setClicked(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    if (clicked) return <Navigate to={"/login"} />;
    return (
        <div className="outer-box">
            <h1 className="big-text">Register</h1>
            <div className="inner-box">
                <header className="signup-header">
                    <h1>Let's get you started</h1>
                </header>
                <main className="signup-body">
                    <form action="#" onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                autoComplete="off"
                                value={user.name}
                                onChange={handleInput}
                                id="fullname"
                                placeholder="name"
                                required
                            ></input>
                        </p>
                        <p>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                name="email"
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                id="email"
                                placeholder="example@gmail.com"
                                required
                            ></input>
                        </p>
                        <p>
                            <label htmlFor="phone">Phone No.</label>
                            <input
                                type="text"
                                name="phone"
                                autoComplete="off"
                                value={user.phone}
                                onChange={handleInput}
                                id="phone"
                                placeholder="91743153XX"
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
                            <label htmlFor="confirmpassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmpassword"
                                autoComplete="off"
                                value={user.confirmpassword}
                                onChange={handleInput}
                                id="confirmpassword"
                                placeholder="confirm password"
                                required
                            ></input>
                        </p>

                        <p>
                            <label htmlFor="type">Type</label>
                            <select
                                className="type"
                                name="type"
                                value={user.type}
                                onChange={handleInput}
                            >
                                <option value="Individual">Individual</option>
                                <option value="Organization">
                                    Organization
                                </option>
                            </select>
                        </p>

                        <p>
                            <input
                                type="submit"
                                id="submit"
                                value="Create Account"
                            ></input>
                        </p>
                    </form>
                </main>
                <footer className="signup-footer">
                    <p>
                        Already have an account?<a href="#">Login</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Register;
