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
  const frag1 = useRef(null);
  const frag2 = useRef(null);
  const frag3 = useRef(null);
  const frag4 = useRef(null);
  const frag5 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(headerRef.current, {
      backgroundSize: "500%",
      //   ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top ",
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
      },
    });

    gsap.to(frag1.current, {
      transform: "translate(-20px, 470px)",
      duration: 3, // Durée de l'animation
      yoyo: true, // L'animation se répète en arrière
      repeat: -1, // Répéter indéfiniment
      ease: "power1.inOut", // Fonction d'animation pour un effet plus doux
    });

    // Animation pour le fragment 2
    gsap.to(frag2.current, {
      transform: "translate(180px, 70px)",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    // Animation pour le fragment 3
    gsap.to(frag3.current, {
      transform: "translate(200px, 30px)",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(frag4.current, {
      transform: "translate(-20px, -710px)",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(frag5.current, {
      transform: "translate(240px, -930px)",
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
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
      <div className={styles.desc_part}>
        <div className={styles.desc_content}>
          <div className={styles.floatting_image}>
            <img ref={frag1} className={styles.fragment1} src="/topImage.png" />
            <img
              ref={frag2}
              className={styles.fragment2}
              src="/middleImage.png"
            />
            <img
              ref={frag3}
              className={styles.fragment3}
              src="/bottomImage.png"
            />
            <img
              ref={frag4}
              className={styles.blueFrag}
              src="/BlueTriangle.png"
            />
            <img
              ref={frag5}
              className={styles.redFrag}
              src="/RedTriangle.png"
            />
          </div>
          <div className={styles.desc_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            lectus arcu bibendum at varius vel pharetra vel turpis. Nec
            ullamcorper sit amet risus nullam eget felis eget nunc. Enim neque
            volutpat ac tincidunt vitae semper quis lectus nulla. Nunc sed id
            semper risus in hendrerit. In nulla posuere sollicitudin aliquam
            ultrices. Tempor nec feugiat nisl pretium fusce. Semper risus in
            hendrerit gravida. Volutpat ac tincidunt vitae semper quis lectus
            nulla at. Ut faucibus pulvinar elementum integer enim neque volutpat
            ac. Suspendisse potenti nullam ac tortor vitae. Vitae tortor
            condimentum lacinia quis vel eros donec ac. Sit amet porttitor eget
            dolor morbi non arcu. Turpis egestas pretium aenean pharetra magna
            ac placerat. Sed vulputate mi sit amet mauris commodo. Faucibus in
            ornare quam viverra orci. Interdum posuere lorem ipsum dolor sit
            amet consectetur adipiscing. Faucibus in ornare quam viverra orci.
            Elementum eu facilisis sed odio morbi quis commodo.
          </div>

          <div className={styles.Group}>
            <img src="/Team.png" />
          </div>
        </div>
        <div className={styles.bottom_text}></div>
      </div>
    </main>
  );
}
