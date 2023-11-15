import styles from "./page.module.css";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Download from "../components/Download/Download";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.app}>
        <Hero />
        <About />
        <Reviews />
        <Download />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
