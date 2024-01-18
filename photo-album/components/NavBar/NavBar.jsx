"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import pexelsIcon from "../../images/pexelsIcon.png";
import linkedInIcon from "../../images/LinkedInIcon.png";
import gitHubIcon from "../../images/githubBK.png";
import { Button, Hidden } from "@mui/material";

export default function NavBar() {
  return (
    <header className={styles.navContainer}>
      <div className={styles.content}>
        <p>Photo Album</p>
        <Button target="_blank" href="https://www.pexels.com/es-es/">
          <Image src={pexelsIcon} width={30} height={30} />
        </Button>
        <Hidden mdDown>
          <Button
            className={styles.responsiveButtons}
            target="_blank"
            href="https://www.linkedin.com/in/julianriera/"
          >
            <Image width={30} height={30} src={linkedInIcon} />
          </Button>
          <Button
            className={styles.responsiveButtons}
            target="_blank"
            href="https://github.com/Srezequielr/PhotoAlbum"
          >
            <Image width={30} height={30} src={gitHubIcon} />
          </Button>
        </Hidden>
      </div>
    </header>
  );
}
