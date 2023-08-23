import React from "react";
import styles from "./mainContent.module.css";

import Search from "./search/Search";
import SummaryMetrics from "./summary-metrics/SummaryMetrics";
import DetailDataDisplay from "./detail-data-display/DetailDataDisplay";

const MainContent = () => {
  return (
    <div className={styles.component}>
      <div>
        <h2>Search for Meteorites</h2>
      </div>
      <Search />
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: "row",
          alignItems: "stretch",
          width: "100%",
          justifyContent: "center",
        }}
        className={styles["data-display"]}
      >
        <SummaryMetrics />
        <DetailDataDisplay />
      </div>
    </div>
  );
};

export default MainContent;
