import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
    const [cart, setCart] = useState([]);
    return (
        <Routes>
            <Route
                path="/"
                element={<Home setCart={setCart} />}
            />
            <Route
                path="/cart"
                element={<Cart cart={cart} />}
            />
        </Routes>
    );
}

export default App;
