"use client";

import { useEffect, useRef, useState } from "react";
// import { promises as fs } from "fs";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const gridRef = useRef(null);

  const [gridData, setGridData] = useState({ grid: [] });
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
