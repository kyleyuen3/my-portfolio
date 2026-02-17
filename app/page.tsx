/* styles is my keyword im using to pull from my css file */
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={`${styles.hero} ${styles.fadeUp}`} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerTop}>

          {/* Name */}
          <h1 className={styles.title}>Kyle Yuen</h1>

          {/* Nav */}
          <nav className={styles.nav}>
            <a className={styles.navLink} href="#home">Home</a>
            <a className={styles.navLink} href="#about">About</a>
            <a className={styles.navLink} href="#projects">Portfolio</a>
            <a className={styles.navLink} href="/photos">Photos</a>
            <a className={styles.navLink} href="#contact">Contact</a>
          </nav>
        </div>

        {/* Subtitle */}
        <p className={styles.subtitle}>Full Stack Developer</p>

      </header>

      <div className={styles.content}>
        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.fadeUp} ${styles.delay1}`}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>I’m Kyle Yuen — a Computer Science graduate passionate about Software Development, Artifical Intelligence, and mobile app development. I enjoy solving problems, building projects that help people, and continuously learning. I also enjoy traveling, trying new restaurants and hanging out with friends and family.</p>
        </section>

        {/* Project Section */}
        <section id="projects" className={`${styles.section} ${styles.fadeUp} ${styles.delay2}`}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.text}>Currently building Projects</p>
          
          {/* Grid */}
          <div className={styles.projectsGrid}>

            {/*Project #1*/}
            <div className={styles.projectCard}>
              
            </div>

            {/*Project #2*/}
            <div className={styles.projectCard}>
              
            </div>
            
            {/*Project #3*/}
            <div className={styles.projectCard}>
              
            </div>
            
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${styles.section} ${styles.fadeUp} ${styles.delay3}`}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.text}>Contact me at gmail</p>
        </section>


      </div>
      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2026 Kyle Yuen. All rights reserved.</p>
      </footer>
    </main>
  )
}