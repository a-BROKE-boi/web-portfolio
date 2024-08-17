import styles from "./App.module.css";
import { Body } from "./components/Body/Body";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
