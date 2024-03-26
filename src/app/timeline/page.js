"use client";

import { useEffect, useRef, useState } from "react";
// import { promises as fs } from "fs";
import styles from "./page.module.css";
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

    // nodeGridDiv.forEach((div) => {
    //   const rect = div.getBoundingClientRect();
    //   console.log(rect);
    //   const distance = Math.sqrt(
    //     Math.pow(rect.left + rect.width / 2 - centerX, 2) +
    //       Math.pow(rect.top + rect.height / 2 - centerY, 2)
    //   );
    //   if (distance < minDistance) {
    //     minDistance = distance;
    //     setClosestDiv(div);
    //   }
    // });

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
          <div key={rowIndex} className={styles.grid_cell}>
            <div className={styles.unselectable}>{row.name} </div>
          </div>
        ))}
      </div>
    </main>
  );
}
