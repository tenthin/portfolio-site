import React from "react";
import "./HeroPage.scss";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function HeroPage() {
  return (
    <div className="hero">
      <div className="homePosition">
        <div className="nameHi">
          Hi, I am <b>Tenzin Thinley</b>
        </div>
        <div className="jobIntro">A FRONTEND DEVELOPER WITH</div>
        <div className="icon-container">
          {/* <div className="icon"> */}
          <img src={"/img/html5-logo.png"} alt="" />
          {/* </div> */}
          {/* <div className="icon"> */}
          <img src="/img/css3-logo.png" alt="" />
          {/* </div> */}
          {/* <div className="icon"> */}
          <img src="/img/js-logo.png" alt="" />
          {/* </div> */}
          {/* <div className="icon"> */}
          <img src="/img/react-logo.png" alt="" />
          {/* </div> */}
        </div>
      </div>
      <div>
        <a href="#aboutme">
          <KeyboardArrowDownIcon
            style={{
              color: "white",
              fontSize: 100,
              // width: "50px",
              cursor: "pointer",
              marginLeft: "140px",
              paddingTop: "3rem",
              // marginRight: "auto",
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default HeroPage;
