import React from "react";
import Picture from "../assets/profilepicture.jpg";

import "../App.css";
const Home = () => {
  return (
    <div className="App">
      <section className="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <a id="profilePicture" href="#popup">
        <img src={Picture} alt="Profile Picture" />
      </a>

      <div className="overlay" id="popup">
        <div className="popup">
          <div className="popup-quote">Teaching myself how to code</div>
          <a className="popup-close" href="#">
            &times;
          </a>
        </div>
      </div>

      <div id="userName">
        <a href="https://github.com/0rigin-c0de" target="blank">
          @0rigin-c0de
        </a>
      </div>

      <div id="links">
        <a
          className="link"
          href="https://github.com/0rigin-c0de"
          target="_blank"
        >
          <i className="fab fa-github">&nbsp;</i>Github
        </a>
        <a
          className="link"
          href="https://twitter.com/Cook_C0de"
          target="_blank"
        >
          <i className="fab fa-twitter">&nbsp;</i>Twitter
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/sunil-kumar-029697279//"
          target="_blank"
        >
          <i className="fab fa-linkedin">&nbsp;</i>Linkedin
        </a>
        <a
          className="link"
          href="https://www.instagram.com/shunnu02"
          target="_blank"
        >
          <i className="fab fa-instagram">&nbsp;</i>Instagram
        </a>

        <a
          className="link"
          href="https://techfolio1.netlify.app/"
          target="_blank"
        >
          <i className="fab fa-link">&nbsp;</i>
          Portfolio
        </a>

        <a className="link" href="https://shunnu.hashnode.dev/" target="_blank">
          <i className="fab fa-hashnode">&nbsp;</i>
          Personal Blog
        </a>
      </div>

      <div id="hashtag">#HappyCoding❤</div>
    </div>
  );
};

export default Home;
