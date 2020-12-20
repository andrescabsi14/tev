import React from "react";
import styles from "./BackNav.module.scss";

interface BackNavProps {}

const BackNav: React.FC<BackNavProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div>BackNav</div>
    </div>
  );
};

export default BackNav;
