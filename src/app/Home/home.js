import HomeStyles from "./home.module.css";
import ArcsSvg from "./assets/arcs";
import BlueFlowerSvg from "./assets/blueFlower";
import PinkFlowerSvg from "./assets/pinkFlower";
import Image from "next/image";
import popArt from "/public/Home/popArt.png";
import image from "/public/Home/image.png";
import jaws from "/public/Home/jaws.png";
import music from "/public/Home/music.png";
import playmobil from "/public/Home/playmobil.png";
import clint from "/public/Home/clint.png";
import bowie from "/public/Home/bowie.png";
import RocketSvg from "./assets/rocket";
import { useRouter } from 'next/router';
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={HomeStyles.main}>
      <div className={HomeStyles.rocket}></div>
      <div className={HomeStyles.flex}>
        <div className={HomeStyles.pinkFlower}>
          <PinkFlowerSvg />
        </div>
        <div className={HomeStyles.rightflex} >
          <Link href="/timeline"className={HomeStyles.rocket}>
          <RocketSvg />
          </Link>
          <div className={HomeStyles.blueFlower} >
          <BlueFlowerSvg />
          </div>
        </div>
      </div>
      <div className={HomeStyles.imageContainer}>
        <div>
          <Image
            style={{ marginLeft: "-325px", marginTop: "-625px" }}
            className={HomeStyles.image}
            src={playmobil}
            width={712}
            height={826}
          />
          <Image
            style={{ marginLeft: "-75px", marginTop: "-600px" }}
            className={HomeStyles.image}
            src={image}
            width={400}
            height={550}
          />
          <Image
            style={{ marginLeft: "-425px", marginTop: "-525px" }}
            className={HomeStyles.image}
            src={clint}
            width={567}
            height={848}
          />
          <Image
            style={{ marginLeft: "-400px", marginTop: "-400px" }}
            className={HomeStyles.image}
            src={popArt}
            width={466}
            height={660}
          />
          <Image
            style={{
              marginLeft: "100px",
              marginTop: "-325px",
              transform: "rotate(15deg)",
            }}
            className={HomeStyles.image}
            src={jaws}
            width={687}
            height={635}
          />
          <Image
            style={{ marginTop: "-450px" }}
            className={HomeStyles.image}
            src={music}
            width={508}
            height={642}
          />
          <Image
            style={{
              marginLeft: "-200px",
              marginTop: "-425px",
              transform: "rotate(-5deg)",
            }}
            className={HomeStyles.image}
            src={bowie}
            width={529}
            height={553}
          />
        </div>
      </div>
      <div className={HomeStyles.arcs}>
        <ArcsSvg />
      </div>
    </main>
  );
}
