import React from "react";
import styles from "./search.module.css";
import { Icon } from "@iconify/react";

const Search = () => {
  return (
    <div className={styles.grid}>
      <div className="input-group">
        <Icon icon="material-symbols:search" />
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name"
        />
      </div>
      <div className="input-group">
        <Icon icon="material-symbols:search" />
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name"
        />
      </div>
      <div className="input-group">
        <Icon icon="material-symbols:search" />
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name"
        />
      </div>
      <div className="input-group">
        <Icon icon="material-symbols:search" />
        <input
          type="text"
          className="input-field"
          placeholder="Enter your name"
        />
      </div>
    </div>
  );
};

export default Search;
