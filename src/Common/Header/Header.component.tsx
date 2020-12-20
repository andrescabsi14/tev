import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.wrapper}>
      <ol>
        <NavLink to="/" activeClassName={styles.active}>
          Home
        </NavLink>
      </ol>
    </header>
  );
};

export default Header;
