"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import pexelsIcon from "../../images/pexelsIcon.png";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <div className={styles.navContainer}>
      <p>Photo Album</p>
      <Button target="_blank" href="https://www.pexels.com/es-es/">
        <Image src={pexelsIcon} width={30} height={30} />
      </Button>
    </div>
  );
}
