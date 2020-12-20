import React from "react";
import styles from "./App.module.scss";
import AppRoutes from "./Routes";

interface AppProps {}

export const isMobile = window.innerWidth < 768;

const App: React.FC<AppProps> = () => {
  return (
    <section className={styles.wrapper}>
      <AppRoutes />
    </section>
  );
};

export default App;
