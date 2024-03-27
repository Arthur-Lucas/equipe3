'use client';

import styles from './page.module.css';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function Page() {

  const circle = useRef();
  const container = useRef();

  useGSAP(()=> {
    gsap.to("");
  });
  return (
    <main className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.twoColumns}>
          <div className={styles.column}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.column}>
            <h1 className={styles.title}>WoodStock du 15 au 18 août 1969</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
