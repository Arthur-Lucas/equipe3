"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import clsx from "clsx";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

export default function Page() {
  const gridRef1 = useRef(null);
  const gridRef2 = useRef(null);
  const [counter, setCounter] = useState("1965");
  const [gridData1, setGridData1] = useState({ grid1: [] });
  const [gridData2, setGridData2] = useState({ grid2: [] });
  
  useEffect(() => {
    async function fetchData() {
      const JSONData1 = {
        grid1: [
          { name: "Epoque 1", img: "pinkFloyd.png" },
          { name: "Epoque 2", img: "operaSydney.png" },
          { name: "Epoque 3", img: "bikini.png" },
          { name: "Epoque 4", img: "jaws.png" },
          { name: "Epoque 5", img: "pinkFloyd.png" },
          { name: "Epoque 6", img: "bikini.png" },
          { name: "Epoque 7", img: "operaSydney.png" },
          { name: "Epoque 8", img: "bikini.png" },
          { name: "Epoque 9", img: "jaws.png" },
        ],
      };
      const JSONData2 = {
        grid2: [
          { name: "Epoque 1", img: "pinkFloyd.png" },
          { name: "Epoque 2", img: "exorcist.png" },
          { name: "Epoque 3", img: "bikini.png" },
          { name: "Epoque 4", img: "jaws.png" },
          { name: "Epoque 5", img: "ovnis.png" },
          { name: "Epoque 6", img: "bikini.png" },
          { name: "Epoque 7", img: "exorcist.png" },
          { name: "Epoque 8", img: "popArt.png" },
          { name: "Epoque 9", img: "jaws.png" },
        ],
      };
      setGridData1(JSONData1);
      setGridData2(JSONData2);
    }
    fetchData();
  
    const trigger = ScrollTrigger.create({
      trigger: "#main",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        var velocity = self.getVelocity() / 300; 
        var velocityTranslate = self.getVelocity() / 300;
        if(velocityTranslate < 0){
          velocityTranslate = velocityTranslate * -1;
        }
        gsap.to(".grid_cell", {
          rotate: velocity, 
          ease: "none",
        }); 
        gsap.to(".gcone", {
          translateX: velocityTranslate * -8,
          translateY: velocityTranslate * -4,
        })
        gsap.to(".gctwo", {
          translateX: velocityTranslate * 8,
          translateY: velocityTranslate * 4,
        })
        velocityTranslate = 0;
        velocity = 0;
      },
      onScrubComplete: () => {
        console.log("onScrubComplete");
        gsap.to(".grid_cell", { rotate: 0, ease: "none" });
      },
    });
    let scrollTimeout; 

    const userStoppedScrolling = () => {
      const windowScroll = window.scrollY;
      
      if (windowScroll < 350 && windowScroll > 0) {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
        document.getElementsByClassName("blur")[0].style.backgroundImage = "url(/operaSydney.png)";
        setCounter("1965"); 
      }else if (windowScroll < 900 && windowScroll > 300){
        window.scrollTo({
          top: 750,
          behavior: 'smooth' 
        });
        document.getElementsByClassName("blur")[0].style.backgroundImage = "url(/pinkFloyd.png)";
        setCounter("1968");
      }
      else if (windowScroll < 1500 && windowScroll > 900){
        window.scrollTo({
          top: 1350,
          behavior: 'smooth' 
        });
        document.getElementsByClassName("blur")[0].style.backgroundImage = "url(/bikini.png)";
        document.getElementsByClassName("grid_cell")[1].style.transform = "rotate(0deg) !important";
        setCounter("1970");
      }
      else if (windowScroll < 2200 && windowScroll > 1500){
        window.scrollTo({
          top: 1950,
          behavior: 'smooth',
        });
          document.getElementsByClassName("blur")[0].style.backgroundImage = "url(/exorcist.png)";``
          setCounter("1972");
      }
      else if (windowScroll < 2800 && windowScroll > 1900){
        window.scrollTo({
          top: 2550,
          behavior: 'smooth' 
        });
        document.getElementsByClassName("blur")[0].style.backgroundImage = "url(/ovnis.png)";
        setCounter("1974");
      }
      else if (windowScroll < 3500 && windowScroll > 2400){
        window.scrollTo({
          top: 3350,
          behavior: 'smooth' 
        });
        document.getElementsByClassName("blur")[0].style.backgroundImage = "url(/popArt.png)";
        setCounter("1975");
      }
      document.querySelectorAll(".grid_cell").forEach((element) => {
        element.style.transform = "rotate(0deg) !important";
        gsap.set(element, { clearProps: "transform" });
      });    
    };
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(userStoppedScrolling, 150); 
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      trigger.kill();
    };

  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    let startX = 0;
    let startY = 0;

    const handleMouseDown = (event) => {
      document.body.style.cursor = "move";
      startX = event.clientX;
      startY = event.clientY;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      const deltaX = (event.clientX - startX) * 15;
      const deltaY = (event.clientY - startY) * 15;
      gsap.to(grid, { x: "+=" + deltaX, y: "+=" + deltaY, duration: 0.5 });
      startX = event.clientX;
      startY = event.clientY;
    };

    const handleMouseUp = () => {
      document.body.style.cursor = "default";
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    grid.addEventListener("mousedown", handleMouseDown);

    return () => {
      grid.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <main className={styles.main} id = "main">
      <div className={styles.gradiant}/>
      <div className={styles.blur + " blur"}/>
      <h2 className={styles.h2}>{counter}</h2>
      <div ref={gridRef1} className={styles.carousel_grid}>
        {gridData1.grid1.map((row, rowIndex) => (
          <div className={styles.imagesSlice}>
            <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={clsx(styles.grid_cell , "grid_cell" , styles.gcone, "gcone")} >
              <div className={styles.unselectable}></div>
            </div>
            <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={clsx(styles.grid_cell , "grid_cell" , styles.gctwo, "gctwo")} >
              <div className={styles.unselectable}></div>
            </div>
          </div>
        ))}
      </div>
      <div ref={gridRef2} className={styles.carousel_grid}>
        {gridData2.grid2.map((row, rowIndex) => (
          <div className={styles.imagesSlice}>
            <div style={{ backgroundImage: `url(/${row.img})`}} key={rowIndex} className={clsx(styles.grid_cell , "grid_cell" , styles.gcone, "gcone")} >
              <div className={styles.unselectable}></div>
            </div>
            <div style={{ backgroundImage: `url(/${row.img})`}} key={rowIndex + " 1"} className={clsx(styles.grid_cell , "grid_cell" , styles.gctwo, "gctwo")} >
              <div className={styles.unselectable}></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
