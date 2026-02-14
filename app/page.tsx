/* styles is my keyword im using to pull from my css file */
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900">Kyle</h1>
        <p className="text-xl text-gray-600 mt-4">Full Stack Developer</p>

        {/* About Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p>My name is Kyle and this is my website.</p>
        </section>


      </div>
    </main>
  )
}