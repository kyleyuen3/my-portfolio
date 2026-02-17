import Image from "next/image";
import styles from "./photos.module.css";

export default function PhotosPage() {
  return (
    <main className={styles.container}>
        <div className={styles.content}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTop}>

            {/* Name */}
            <h1 className={styles.title}>Kyle Yuen</h1>

            {/* Nav */}
            <nav className={styles.nav}>
              <a className={styles.navLink} href="/#home">Home</a>
              <a className={styles.navLink} href="/#about">About</a>
              <a className={styles.navLink} href="/#projects">Portfolio</a>
              <a className={styles.navLink} href="/photos">Photos</a>
              <a className={styles.navLink} href="/#contact">Contact</a>
            </nav>
          </div>

          {/* Subtitle */}
          <p className={styles.subtitle}>Full Stack Developer</p>

        </header>  
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
       </div> 
    </main>
  );
}
