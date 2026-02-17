/* styles is my keyword im using to pull from my css file */
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>

        {/* Header */}
          <h1 className={styles.title}>Kyle Yuen</h1>
          <p className={styles.subtitle}>Full Stack Developer</p>


        {/* About Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>My name is Kyle and this is my website.</p>
        </section>

        {/* Project Section */}
        <section className={styles.section}>
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



      </div>
    </main>
  )
}