import React, { useEffect, useState } from "react";

import axios from "axios";

const Home = ({ setCart }) => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };
    return (
        <section id="home">
            <div className="all-products">
                {products?.map((product) => (
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
                        <button onClick={() => addToCart(product)}>cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
