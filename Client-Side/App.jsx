import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import logo from "./logo.png"; // Place your logo image in src/

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="app">
      <header>
        <img src={logo} alt="Fashion Bazaar" className="logo" />
        <h1>Fashion Bazaar</h1>
      </header>

      <main>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
