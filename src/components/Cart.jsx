import React from "react";

const Cart = ({ cart }) => {
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
