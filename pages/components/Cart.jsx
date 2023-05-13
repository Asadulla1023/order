import Image from "next/image";
import React, { useState } from "react";

import styles from "../../styles/cart.module.css";

const Cart = ({ selected, setCartOpen }) => {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <Image
          className={styles.iks_img}
          src="/iks.png"
          alt=""
          width={700}
          height={700}
          onClick={() => {
            setCartOpen(false);
          }}
        />
        <div className={styles.modal_page}>
          {selected.map((e) => {
            return (
              <div className={styles.cartItem}>
                <Image src={e.image} width={120} height={120} />
                <div className={styles.desc}>
                  <h4>{e.title}</h4>
                  <p>{e.price * counter}$</p>
                </div>
                <div className={styles.counter}>
                  <button
                    onClick={() => {
                      if (counter > 1) {
                        setCounter(counter - 1);
                      } else {
                        setCartOpen(false)
                      }
                    }}
                  >
                    —
                  </button>
                  <p>{counter}</p>
                  <button
                    onClick={() => {
                      if (counter < 10) {
                        setCounter(counter + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
