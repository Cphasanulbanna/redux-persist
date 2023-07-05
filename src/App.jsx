import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cart"
                    element={<Cart />}
                />
            </Routes>
        </>
    );
}

export default App;
