import React, { useEffect, useState } from "react";
import styles from "../../styles/product.module.css";
import Image from "next/image";
import Cart from "./Cart";
const Card = ({ title, price, desc, image, obj }) => {
  const [selected, setSelected] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={image} width={307} height={307} />
        </div>
        <div className={styles.productTag}>
          <h1>{title}</h1>
          <h3>{desc}</h3>
          <button
            onClick={() => {
              setSelected(obj.filter((e) => e.price === price));
              setCartOpen(true);
            }}
            className={styles.productPrice}
          >
            {price}$
          </button>
        </div>
      </div>
      {cartOpen && <Cart selected={selected} setCartOpen={setCartOpen} />}
    </>
  );
};

export default Card;
