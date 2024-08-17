import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>hi, I'm Caio</h1>
        <p className={styles.description}>
          I'm a Junior software developer with 6 years in illustration & design
        </p>
        <a href="mailto:caiowhitmore@outlook.com" className={styles.contactBtn}>
          {" "}
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile-picture.jpg")}
        alt="picture of me in brazil"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
