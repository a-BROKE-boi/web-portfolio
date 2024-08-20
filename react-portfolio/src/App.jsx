import styles from "./App.module.css";
import { Bio } from "./components/Bio/Bio";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />

      <Bio />
    </div>
  );
}

export default App;
