import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./BackNav.module.scss";

interface BackNavProps {}

const BackNav: React.FC<BackNavProps> = () => {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </div>
  );
};

export default BackNav;
