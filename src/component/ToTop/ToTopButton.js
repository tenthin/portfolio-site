import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./ToTopButton.css";

export default function () {
  return (
    <div>
      <a href="/">
        <ArrowUpwardIcon
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: 5,
            fontSize: 50,
            width: "50px",
            cursor: "pointer",
          }}
        />
      </a>
    </div>
  );
}
