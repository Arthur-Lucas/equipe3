'use client';

import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import styles from './page.module.css';

export default function Page() {
  const imageRef = useRef(); // This ref is attached to the image you want to zoom in on

  useEffect(() => {
    // Assuming you want to zoom in the image, you can scale it up
    gsap.to(imageRef.current, { duration: 1, scale: 1.5, ease: "power2.out" });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.image} ref={imageRef}></div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.title}>WoodStock du 15 au 18 août 1969</h1>
          </div>
        </div>
      </div>
    </main>
  );
}

