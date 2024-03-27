"use client";

import { useEffect, useRef, useState } from "react";
// import { promises as fs } from "fs";
import styles from "./page.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const gridRef = useRef(null);

  const [gridData, setGridData] = useState({ grid: [] });
  const [closestDiv, setClosestDiv] = useState(null);
  const [nodeGridDiv, setNodeGridDiv] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const JSONData = {
        grid: [
          { name: "Epoque 1", img: "pinkFloyd.png" },
          { name: "Epoque 2", img: "bikini.png" },
          { name: "Epoque 3", img: "operaSydney.png" },
          { name: "Epoque 4", img: "jaws.png" },
          { name: "Epoque 5", img: "pinkFloyd.png" },
          { name: "Epoque 6", img: "bikini.png" },
          { name: "Epoque 7", img: "operaSydney.png" },
          { name: "Epoque 8", img: "bikini.png" },
          { name: "Epoque 9", img: "jaws.png" },
        ],
      };
      setGridData(JSONData);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const grid = gridRef.current;
    
    const handleWheel = (event) => {
      event.preventDefault();
      const deltaY = event.deltaY * 5.5; 
      const deltaX = event.deltaX * 5.5;
      gsap.to(grid, {
        y: "+=" + deltaY,
        x: "+=" + deltaX,
        duration: 0.5,
        ease: "power1.out", 
      });
    };
  
    grid.addEventListener('wheel', handleWheel, { passive: false });
  
    return () => {
      grid.removeEventListener('wheel', handleWheel);
    };
  }, []);
  useEffect(() => {
    setNodeGridDiv(gridRef.current.querySelectorAll(`.${styles.grid_cell}`));
    console.log(
      gridRef.current.querySelectorAll(`.${styles.grid_cell}`),
      nodeGridDiv
    );
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    let startX = 0;
    let startY = 0;

    // ancrer div au centre de la page
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let minDistance = Infinity;


    const handleMouseDown = (event) => {
      document.body.style.cursor = "move";
      startX = event.clientX;
      startY = event.clientY;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event) => {
      const deltaX = (event.clientX - startX) * 10;
      const deltaY = (event.clientY - startY) * 10;
      gsap.to(grid, {
        x: "+=" + deltaX,
        y: "+=" + deltaY,
        duration: 0.5,
        onComplete: () => {
          if (closestDiv) {
            // console;
            const rect = closestDiv.getBoundingClientRect();
            const offsetX = centerX - (rect.left + rect.width / 2);
            const offsetY = centerY - (rect.top + rect.height / 2);
            gsap.to(closestDiv, { x: offsetX, y: offsetY, duration: 0.5 });
          }
        },
      });
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
    <main className={styles.main}>
      <div ref={gridRef} className={styles.carousel_grid}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
    </main>
  );
}
