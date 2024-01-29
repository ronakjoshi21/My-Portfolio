// File Name - Hero.jsx
// Student Name - Ronak Joshi
// Student ID - 301405108 
// Date - 27/01/24

import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ronak Joshi..!!</h1>
        <h4 className={styles.title}>Welcome to my Portfolio Website..!!</h4>
        <p className={styles.description}>
          I'm a full-stack developer and a Web Designer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ronakjoshi046@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/logo1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
