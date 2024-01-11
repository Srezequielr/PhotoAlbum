import { Button } from "@mui/material";
import styles from "./Buttons.module.css";
import Image from "next/image";
import linkedInIcon from "../../images/LinkedInIcon.png";
import gitHubIcon from "../../images/githubBK.png";

export default function Buttons() {
  return (
    <div className={styles.buttonsContainer}>
      <div className={styles.button}>
        <Button
          target="_blank"
          href="https://www.linkedin.com/in/julianriera/"
        >
          <Image width={25} src={linkedInIcon} />
        </Button>
      </div>
      <div className={styles.button}>
        <Button
          target="_blank"
          href="https://github.com/Srezequielr/PhotoAlbum"
        >
          <Image width={25} src={gitHubIcon} />
        </Button>
      </div>
    </div>
  );
}
