import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import UserContext from "./context/UserContext";
import { useState } from "react";
const AppLayout = () => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
        loggedIn: false
    });

    useEffect(() => {
        const checkIsLoggedIn = async () => {
            let token = sessionStorage.getItem("auth-token");
            console.log("CheckisLoggedIn is called");
            if (token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }

            if (token == "") return;

            const tokenResponse = await axios.get(
                "http://localhost:1234/isAuthenticated",

                { headers: { "auth-token": token } }
            );

            setUserData({
                token: token,
                user: tokenResponse.data.data,
                loggedIn: true
            });
        };

        checkIsLoggedIn();
    }, []);
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <Header />
            <Outlet />
            <Footer />
        </UserContext.Provider>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            ,
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
