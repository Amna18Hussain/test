import React, { useState, useEffect } from 'react';
import './Product.css'

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const products = await response.json();
                setData(products);
                setFilter(products);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        getProducts();
    }, []);

    const Loading = () => <div>Loading...</div>;

    const filterProduct = (category) => {
        if (category === "all") {
            setFilter(data);
        } else {
            const updatedList = data.filter((product) => product.category === category);
            setFilter(updatedList);
        }
    };

    return (
        <>
            <div>
                <div className='Button'>
                    <button onClick={() => filterProduct("all")}>All</button>
                    <button onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button onClick={() => filterProduct("jewelery")}>Jewelry</button>
                    <button onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>

                <div className="product-grid">
                    <div className="box">
                    {loading ? <Loading /> : filter.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h5>{product.title}</h5>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
