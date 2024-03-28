"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HomePage from "./Home/home";

export default function Home() {
  return <HomePage/>;
}
