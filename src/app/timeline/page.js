"use client";

import { useEffect, useRef, useState } from "react";
// import { promises as fs } from "fs";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  const [gridData, setGridData] = useState({ grid: [] });
  useEffect(() => {
    async function fetchData() {
      // const response = await fetch("./api/data");
      // const jsonData = await response.json();
      // setData(jsonData);
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

  return (
    <main className={styles.main}>
      <div className={styles.carousel_grid}>
        {gridData.grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.grid_cell}>
            <div>{row.name} </div>
          </div>
        ))}
      </div>
    </main>
  );
}
