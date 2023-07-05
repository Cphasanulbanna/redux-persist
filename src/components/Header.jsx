import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link
                className="btn"
                to="/"
            >
                Home
            </Link>
            <Link
                className="btn"
                to="/cart"
            >
                Cart
            </Link>
        </div>
    );
};

export default Header;
