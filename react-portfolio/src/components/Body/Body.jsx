import React from "react";

import styles from "./Body.module.css";
import { motion } from "framer-motion";

export const Body = () => {
  const text = "Framer Motion is a really cool tool".split(" ");
  return (
    <>
      <ul className={styles.menu}>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <div className={styles.box}>
        <h2 className={styles.text}>Parallelogram CSS</h2>
        <div className={styles.parallelogram}></div>
        <div className={styles.child}>
          <h2 className={styles.text}>hello</h2>
        </div>
      </div>
      <h2>
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </h2>
    </>
  );
};
