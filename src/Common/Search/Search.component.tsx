import React from "react";
import styles from "./Search.module.scss";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div>Search</div>
    </div>
  );
};

export default Search;
