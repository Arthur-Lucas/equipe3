"use client";

import { useEffect, useRef, useState } from "react";
// import { promises as fs } from "fs";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const mainRef = useRef(null); 

  const [gridData, setGridData] = useState({ grid: [] });
  const [closestDiv, setClosestDiv] = useState(null);
  const [nodeGridDiv, setNodeGridDiv] = useState([]);

  const [bEmpty, setBEmpty] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const JSONData = {
        grid: [
          { name: "Epoque 1", img: "jpg" },
          { name: "Epoque 2", img: "jpg" },
          { name: "Epoque 3", img: "jpg" },
          { name: "Epoque 4", img: "jpg" },
          { name: "Epoque 5", img: "jpg" },
          { name: "Epoque 6", img: "jpg" },
          { name: "Epoque 7", img: "jpg" },
          { name: "Epoque 8", img: "jpg" },
          { name: "Epoque 9", img: "jpg" },
        ],
      };
      setGridData(JSONData);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Cet effet sera déclenché chaque fois que nodeGridDiv changera
    if (nodeGridDiv.length === 0) {
      // Si nodeGridDiv est vide, mettez à jour nodeGridDiv avec les divs de la grille
      const divs = gridRef.current.querySelectorAll(`.${styles.grid_cell}`);
      setNodeGridDiv(Array.from(divs)); // Convertissez NodeList en tableau
      setBEmpty(false);
    } else {
      setBEmpty(true);
    }
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
      gsap.to(mainRef.current, {
        x: "+=" + deltaX,
        y: "+=" + deltaY,
        duration: 0.5,
        onComplete: () => {
          nodeGridDiv.forEach((div) => {
            const rect = div.getBoundingClientRect();
            const distance = Math.sqrt(
              Math.pow(rect.left + rect.width / 2 - centerX, 2) +
                Math.pow(rect.top + rect.height / 2 - centerY, 2)
            );

            if (distance < minDistance) {
              minDistance = distance;
              setClosestDiv(div);
              console.log(div);
            }
          });
          console.log(closestDiv);
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

    main.addEventListener("mousedown", handleMouseDown);

    return () => {
      main.removeEventListener('wheel', handleWheel);
      main.removeEventListener("mousedown", handleMouseDown);
    };
  }, [nodeGridDiv]);

  return (
    <main ref={mainRef} className={styles.main}>
      <div  className={styles.carousel_grid + " d1 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell }>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d2 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d3 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d4 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d5 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d6 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d7 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d8 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div>
      <div  className={styles.carousel_grid + " d9 "}>
        {gridData.grid.map((row, rowIndex) => (
          <div style={{ backgroundImage: `url(/${row.img})` }} key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}></div>
          </div>
        ))}
      </div> 
    </main>
    
  );
}
