import Image from "next/image";
import styles from "./photos.module.css";

export default function PhotosPage() {
  return (
    <main className={styles.page}>
      <h1>Photos</h1>

      <div className={styles.grid}>
        <Image
          src="/photos/kyleVancouver.jpg"
          alt="Kyle in Vancouver"
          width={600}
          height={600}
          className={styles.photo}
        />
      </div>
    </main>
  );
}
