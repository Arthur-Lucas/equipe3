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
  const frag6 = useRef(null);
  const frag7 = useRef(null);
  const frag8 = useRef(null);
  const date = useRef(null);
  const footerText = useRef(null);
  const footer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(headerRef.current, {
      //   ease: "none",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top+=10 top",
        end: "bottom top ",
        scrub: 0.5,
      },
      backgroundSize: "500%",
    });

    gsap.to(headerTitleRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      fontSize: "190px",
      ease: "none",
    });

    // gsap.to(frag1.current, {
    //   transform: "translate(-20px, 470px)",
    //   duration: 3, // Durée de l'animation
    //   yoyo: true, // L'animation se répète en arrière
    //   repeat: -1, // Répéter indéfiniment
    //   ease: "power1.inOut", // Fonction d'animation pour un effet plus doux
    // });

    // // Animation pour le fragment 2
    // gsap.to(frag2.current, {
    //   transform: "translate(180px, 70px)",
    //   duration: 3,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    // // Animation pour le fragment 3
    // gsap.to(frag3.current, {
    //   transform: "translate(200px, 30px)",
    //   duration: 3,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    // gsap.to(frag4.current, {
    //   transform: "translate(-20px, -710px)",
    //   duration: 3,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    // gsap.to(frag5.current, {
    //   transform: "translate(240px, -930px)",
    //   duration: 3,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    // gsap.to(frag6.current, {
    //   transform: "translate(-45px, 455px)",
    //   duration: 3,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    // gsap.to(frag7.current, {
    //   transform: "translate(50px, 70px)",
    //   duration: 4,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    // gsap.to(frag8.current, {
    //   transform: "translate(10px, -330px)",
    //   duration: 4,
    //   yoyo: true,
    //   repeat: -1,
    //   ease: "power1.inOut",
    // });

    gsap.to(date.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "center top",
        // markers: true,
        // pin: true,
        scrub: 1,
      },
      top: "10",
      fontSize: "32px",
      duration: 0.5,
      ease: "ease-in-out",
    });


    // let date = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: headerRef.current,
    //     start: "top top",
    //     end: () => window.innerHeight * 1.2,
    //     scrub: 0.6,
    //     markers: true,
    //   }
    // });
    // date.fromTo(date.current, {
    //   bottom: '60vw',
    //   yPercent: -50,
    //   scale: 1.7,
    // }, {
    //   top: '2vw',
    //   yPercent: 0,
    //   scale: 1,
    //   duration: 0.8,
    // });



    gsap.to(footerText.current, {
      transform: "translate(90%, 0px)",
      duration: 5,
      ease: "none",
      scrollTrigger: {
        trigger: footer.current,
        start: "top bottom",
        end: "bottom bottom",
        // markers: true,
        // pin: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <h1 ref={date} className={styles.date}>
            <span><span>1968</span></span> 
          </h1>
      </nav>
      <div ref={headerRef} id="header" className={styles.header}>
        {/* <svg width="30%" height="200px" viewBox="-4 -1 38 28">
          <polygon
            fill="transparent"
            stroke="#FFFF"
            stroke-width="2"
            points="15,0 30,30 0,30"
          ></polygon>
        </svg> */}
        {/* <span className={styles.span_hide}></span> */}
        {/* <img className={styles.Logo} src="/Equilateral.svg" /> */}
        
        <h2 ref={headerTitleRef} id="headerTitle" className={styles.title}>
          PINK FLOYD
        </h2>
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
            dolor morbi non arcu.
          </div>

          <div className={styles.Group}>
            <img
              ref={frag6}
              className={styles.redFrag2}
              src="/RedTriangle2.png"
            />
            <img
              ref={frag7}
              className={styles.blueFrag2}
              src="/BlueTriangle2.png"
            />
            <img ref={frag8} className={styles.team} src="/Team.png" />
          </div>
        </div>
        <div ref={footer} className={styles.bottom_text}>
          <p ref={footerText} className={styles.footer}>
            Pink Floyd - 1968 Pink Floyd - 1968
          </p>
        </div>
      </div>
    </main>
  );
}
