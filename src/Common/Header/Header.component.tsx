import React from "react";
import {
  NavLink,
  RouteComponentProps,
  useLocation,
  withRouter,
} from "react-router-dom";
import BackNav from "../BackNav/BackNav.component";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn.component";
import styles from "./Header.module.scss";

interface HeaderProps extends RouteComponentProps<any> {}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={`${styles.wrapper} ${!isHome ? styles.detail : ""}`}>
      {!isHome && (
        <ol className={styles.menu}>
          <NavLink to="/" activeClassName={styles.active}>
            <BackNav />
          </NavLink>
          <FavoriteBtn />
        </ol>
      )}
    </header>
  );
};

export default React.memo(withRouter(Header));
