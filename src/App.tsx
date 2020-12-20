import React from "react";
import styles from "./App.module.scss";
import AppRoutes from "./Routes";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <section className={styles.wrapper}>
      <AppRoutes />
    </section>
  );
};

export default App;
