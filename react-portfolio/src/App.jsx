import styles from "./App.module.css";
import { Body } from "./components/Body/Body";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
