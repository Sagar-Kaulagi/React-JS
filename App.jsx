import styles from "./App.module.css";
import Display from "./components/Display";
import Buttoncontaner from "./components/Buttoncontainer";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>
        <Buttoncontaner></Buttoncontaner>
      </div>
    </>
  );
}

export default App;
