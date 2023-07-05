import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart);
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
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cart;
