import styles from "./App.module.css";
import Steps from "./components/Steps/Steps.jsx";
import Forms from "./components/Forms/Forms.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    function Resize() {
      setIsMobile(window.innerWidth > 960);
    }
    window.addEventListener("resize", Resize);

    Resize();

    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);

  return (
    <main>
      {isMobile ? (
        <div className={styles.container}>
          <Steps />
          <Forms />
        </div>
      ) : (
        <Mobile />
      )}
    </main>
  );
}

export default App;
