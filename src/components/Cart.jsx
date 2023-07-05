import React from "react";
import { useDispatch, useSelector } from "react-redux";

import deleteProduct from "../assets/images/delete.png";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
    const { cart } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const deleteFromCart = (id) => {
        dispatch(removeFromCart(id));
    };
    return (
        <section id="cart">
            <div className="all-products">
                {cart?.map((product) => (
                    <div
                        className="product"
                        key={product.id}
                    >
                        <h1>{product.title}</h1>
                        <div className="image">
                            <img
                                src={product.image}
                                alt="product"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <p className="price">{product.price}</p>
                            <div
                                style={{ width: "25px", height: "25px", cursor: "pointer" }}
                                className="icon"
                                onClick={() => deleteFromCart(product.id)}
                            >
                                <img
                                    src={deleteProduct}
                                    alt="dlt"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cart;
