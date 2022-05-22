import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css'

const App = () => {
    return (
        <div>

            <Link to="/" className="logo-container">
                <i className="fa-solid fa-dove"></i>
                <h1>Freedom e-voting</h1>
            </Link>

            <Outlet />
        </div>
    );
};

export default App;
