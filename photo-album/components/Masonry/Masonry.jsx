import { Masonry } from "@mui/lab";
import styles from "./Masonry.module.css";
import { createClient } from "pexels";
import Link from "next/link";
const APIKEY = process.env.NEXT_PUBLIC_APIKEY;

const client = createClient(APIKEY);

export default async function MasonryCom() {
  const photos = await client.photos
    .curated({ page: 1, per_page: 30 })
    .then((response) => response.photos);

  console.log(photos);
  return (
    <section className={styles.masonryContainer}>
      <Masonry className={styles.masonry} columns={2} spacing={2}>
        {photos?.map((photo, index) => {
          return (
            <div className={styles.imgContainer}>
              <img
                className={styles.images}
                src={photo.src.original}
                key={photo.id}
                alt={photo.alt}
              />
              <p className={styles.credits}>
                Photography by{" "}
                <Link className={styles.link} href={photo.photographer_url}>{photo.photographer}</Link>
              </p>
            </div>
          );
        })}
      </Masonry>
    </section>
  );
}
