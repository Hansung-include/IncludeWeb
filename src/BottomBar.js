import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./BottomBar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const BottomBar = () => {
  return (
    <>
      <div className="bottom-bar-container">
        <nav className="about">
          <span
            className="title"
            onClick={() =>
              window.open(
                "https://github.com/Hansung-include/Coding-Test-Study",
                "_blank"
              )
            }
          >
            Coding Test
          </span>
        </nav>

        <nav className="contact">
          <span
            className="title"
            onClick={() =>
              window.open(
                "https://github.com/Hansung-include/Educational-volunteer-work",
                "_blank"
              )
            }
          >
            Educational Volunteer
          </span>
        </nav>

        <nav>
          <span
            className="title"
            onClick={() =>
              window.open(
                "https://github.com/Hansung-include/IncludeWeb",
                "_blank"
              )
            }
          >
            Web
          </span>
        </nav>
      </div>

      <div className="footer">
        <div className="footer-left">
          <span className="copyright">
            Copyright © 2022 #include 모든 권리 보유.
          </span>
        </div>

        <div className="footer-right">
          <GitHubIcon
            onClick={() =>
              window.open("https://github.com/Hansung-include", "_blank")
            }
            style={{ cursor: "pointer" }}
          />
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
      </div>

      <div className="info">
        <div>
          Hansung Univ. | 회장: 김현배 | 부회장: 이경찬 | 운영진: 오유진, 이준형
        </div>
      </div>
    </>
  );
};

export default BottomBar;
