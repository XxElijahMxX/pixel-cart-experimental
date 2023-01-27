import React, { useState, useEffect } from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

export default function Home({ products, bannerData }) {
  const [cartItems, setCartItems] = useState(true);

return (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Sellers</h2>
      <p>Nostalgia Overload!</p>
    </div>
    
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
)
};


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

//export default Home//
