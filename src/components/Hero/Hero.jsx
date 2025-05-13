import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pankaj </h1>
        <p className={styles.description}>
          I'm a Product Designer with 5 years of experience specializing in 3D modeling, mechanical design, and CAD drafting using AutoCAD and SolidWorks. I bring ideas to life through precise engineering and innovative design solutions. Reach out if you'd like to collaborate or learn more!
        </p>
        <a href="mailto:sharmapankajj3@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
          <a 
            href="https://drive.google.com/file/d/1ZMAaSk86ZQ2HQuj6DNAa4g62c6fl99V5/view?usp=drive_link" 
            download 
            className={styles.resumeBtn}>
            Download Resume
          </a>
           <a 
            href="https://drive.google.com/file/d/1UBdkp__bGWUJh6Uf82hxgd7vJGmXdDfU/view?usp=sharing"  // or a different file like /work-portfolio.pdf
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.portfolioBtn}
           >
            View Portfolio
          </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
