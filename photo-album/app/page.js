import Masonry from "@/components/Masonry/Masonry";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Masonry />
    </main>
  );
}
