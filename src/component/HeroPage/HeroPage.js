import React from "react";
import "./HeroPage.scss";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HeroPage() {
  return (
    <div className="homePosition">
      <div className="nameHi">
        Hi, I am <b>Tenzin Thinley</b>
      </div>
      <div className="jobIntro">A FRONTEND DEVELOPER WITH</div>
      <div className="icon-container">
        <div className="icon">
          <img src={"/img/html5-logo.png"} alt="" />
        </div>
        <div className="icon">
          <img src="/img/css3-logo.png" alt="" />
        </div>
        <div className="icon">
          <img src="/img/js-logo.png" alt="" />
        </div>
        <div className="icon">
          <img src="/img/react-logo.png" alt="" />
        </div>
      </div>
      {/* <div className="down-arrow"> */}
      <a href="#aboutme">
        <KeyboardArrowDownIcon
          style={{
            color: "white",
            fontSize: 100,
            width: "50px",
            cursor: "pointer",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </a>
      {/* </div> */}
      {/* <button className="hero-button">
        GET STARTED
        <div className="hero-button-icon">
          <ArrowForwardIcon />
        </div>
      </button> */}
    </div>
  );
}

export default HeroPage;
