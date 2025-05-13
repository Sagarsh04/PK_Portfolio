import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/icon.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>🧩 Product Designer</h3>
              <p>         
I'm a product designer with hands-on experience in creating detailed 2D/3D models, technical drawings, and mechanical systems using AutoCAD and SolidWorks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> ⚙️ CAD Specialist</h3>
              <p>
               
I specialize in CAD modeling, sheet metal design, and simulation to bring concepts to life with precision and efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>🛠️ Design Engineer</h3>
              <p>       
I've contributed to multiple product development cycles by converting design ideas into production-ready engineering drawings and specifications.


              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
