import Navbar from '@/components/Navbar/Navbar'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.app}>
        <Hero />
        <About />
      </main>
    </>
  )
}
