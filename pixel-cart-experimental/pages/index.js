import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Sellers</h2>
        <p>Nostalgia Overload!</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
