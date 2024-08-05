import React from "react";

import styles from "./Body.module.css";
import { motion } from "framer-motion";

export const Body = () => {
  const text = "Framer Motion is a really cool tool".split(" ");
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.flexChild}>
          {" "}
          <div className={styles.box}>
            <h2 className={styles.text}>Parallelogram CSS</h2>
            <div className={styles.parallelogram}></div>
            <div className={styles.child}>
              <h2 className={styles.text}>hello</h2>
            </div>
          </div>
        </div>
        <div className={styles.flexChild}>
          {" "}
          <div className={styles.container}>
            <img
              className={styles.imageAlignRight}
              src="src/assets/Gigachad-PNG-Images.png"
              alt="Cool guy"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
