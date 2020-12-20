import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import styles from "./FavoriteBtn.module.scss";

interface FavoriteBtnProps {}

const FavoriteBtn: React.FC<FavoriteBtnProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <FontAwesomeIcon icon={faCoffee} />
      </div>
    </div>
  );
};

export default FavoriteBtn;
