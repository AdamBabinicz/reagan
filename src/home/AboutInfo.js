import React, { useState, useEffect } from "react";
import db from "../firebase/config";
import { Link } from "react-router-dom";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import Reveal from "react-reveal/Reveal";

const AboutInfo = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    db.collection("portfolio").onSnapshot((snapshot) =>
      setPortfolios(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="aboutinfo">
      {portfolios.map((portfolio) => (
        <>
          <div className="side2">
            <img className="myImage" src={portfolio.image} alt="..." />
          </div>
          <div className="side1">
            <Reveal effect="fadeInUp" duration="1250">
              <h1 className="title">{portfolio.title}</h1>
              <p className="description">{portfolio.description}</p>
            </Reveal>
            <div className="buttons">
              <Link className="linkBtn" to="/about-me">
                RWR
              </Link>
              <Link className="linkBtn" to="/portfolio">
                Prezydentura
              </Link>
            </div>
            <div className="socialNet">
              <a
                className="links"
                href="https://www.youtube.com/watch?v=Pgs-LaWyUJI"
                target="_blank"
              >
                <YouTubeIcon className="iconSvg" />
              </a>
              <a
                className="links"
                href="https://www.facebook.com/RonaldReagan/about/?ref=page_internal"
                target="_blank"
              >
                <FacebookIcon className="iconSvg" />
              </a>
              <a
                className="links"
                href="https://www.instagram.com/reaganfoundation"
                target="_blank"
              >
                <InstagramIcon className="iconSvg" />
              </a>
              <a
                className="links"
                href="https://twitter.com/RonaldReagan/status/1436359255779590145"
                target="_blank"
              >
                <TwitterIcon className="iconSvg" />
              </a>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AboutInfo;
