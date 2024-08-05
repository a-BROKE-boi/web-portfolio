import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">
          Portfolio
        </a>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li className={styles.item}>
              <a className={styles.linktext} href="#bio">
                Bio
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.linktext} href="#art">
                Art
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.linktext} href="#projects">
                Projects
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.linktext} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
