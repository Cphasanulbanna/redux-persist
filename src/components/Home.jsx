import React, { useEffect, useState } from "react";

import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Home = () => {
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

    const dispatch = useDispatch();
    console.log(products);

    const addtocart = (product) => {
        dispatch(addToCart(product));
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
                        <button onClick={() => addtocart(product)}>cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
