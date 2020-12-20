import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./FavoriteBtn.module.scss";
import {
  FAVORITE_DATA,
  getLocalStorage,
  updateLocalStorage,
} from "../../utils/localStorage";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface FavoriteBtnProps extends RouteComponentProps<any> {}

const FavoriteBtn: React.FC<FavoriteBtnProps> = () => {
  const preId = window.location.pathname.split("/");
  const recipeId = preId[preId?.length - 1];
  const isActive = Boolean(getLocalStorage(FAVORITE_DATA, recipeId));
  const [_active, _setActive] = useState(isActive);

  const setFavorite = () => {
    updateLocalStorage(recipeId, !isActive, FAVORITE_DATA);
    _setActive(!isActive);
  };

  return (
    <div
      className={`${styles.wrapper} ${_active ? styles.active : ""}`}
      onClick={setFavorite}
    >
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default withRouter(FavoriteBtn);
