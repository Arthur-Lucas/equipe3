"use client";

import styles from "./page.module.css";
// import "../globals.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import localFont from "next/font/local";

export default function Page() {
  const headerRef = useRef(null);
  const headerTitleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(headerRef.current, {
      backgroundSize: "500%",
      //   ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top ",
        markers: true,
        // pin: true,
        scrub: 0.5,
      },
    });

    gsap.to(headerTitleRef.current, {
      fontSize: "190px",
      ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });
  }, []);

  return (
    <main className={styles.main}>
      <div ref={headerRef} id="header" className={styles.header}>
        <h1 ref={headerTitleRef} id="headerTitle" className={styles.title}>
          PINK FLOYD
        </h1>
        {/* <img id="headerImg" className={styles.image} src="/PinkFloyd.svg" /> */}
      </div>
      <div className={styles.desc_part}></div>
    </main>
  );
}
