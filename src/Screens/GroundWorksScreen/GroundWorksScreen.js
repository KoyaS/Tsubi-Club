import React, { Component } from "react";
import "./GroundWorksScreen.css";
import header from "../../assets/GroundWorksScreen/rightheader.png";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

// used this site for carousel reference:
// https://codesandbox.io/s/22y75?file=/src/example.js:1203-1310

const waderpic = require("../../assets/GroundWorksScreen/waderwadeee.jpeg");
const pigeonpic = require("../../assets/GroundWorksScreen/pigeonfeatherss.png");
const franxxpic = require("../../assets/GroundWorksScreen/boyfranxx.jpeg");
const tinothewizard = require("../../assets/GroundWorksScreen/TinotheWizard.jpeg");
const acceptance = require("../../assets/GroundWorksScreen/acceptance.jpeg");

const backblob = require("../../assets/GroundWorksScreen/blobs/blobback.png");
const highlightedbackblob = require("../../assets/GroundWorksScreen/blobs/highlightedblobback.png");
const blob1 = require("../../assets/GroundWorksScreen/blobs/blob1.png");
const blob2 = require("../../assets/GroundWorksScreen/blobs/blob2.png");
const blob3 = require("../../assets/GroundWorksScreen/blobs/blob3.png");
const blob4 = require("../../assets/GroundWorksScreen/blobs/blob4.png");

class StemsScreen extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.stiff,
  };

  carousel_content = [
    {
      image: acceptance,
      caption: "welcome to bitch club",
    },
    {
      image: waderpic,
      caption: "@Waderwadeee",
    },
    {
      image: pigeonpic,
      caption: "@pigeonfeatherss",
    },
    {
      image: franxxpic,
      caption: "@boyfranxx",
    },
    {
      image: tinothewizard,
      caption: "@TinotheWizard",
    },
  ];

  slides = [];

  constructor(props) {
    super(props);

    for (var index in this.carousel_content) {
      var content = this.carousel_content[index];
      this.slides.push({
        key: uuidv4(),
        content: (
          <a className="carouselslide">
            <img
              src={content.image}
              alt={content.caption}
              className={"carouselimage"}
            />
            <p style={{ color: "white" }}>{content.caption}</p>
          </a>
        ),
      });
    }

    console.log(this.slides);

    this.slides = this.slides.map((slide, index) => {
      return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
    });
  }

  render() {
    return (
      <div className="GroundworksMain">
        <img src={header} alt="header" id="header" />
        <img
          src={highlightedbackblob}
          alt="highlightedbackblob"
          id="highlightedbackblob"
          class="backblob"
        />
        <a href="/">
          <img src={backblob} alt="backblob" id="backblob" class="backblob" />
        </a>
        <img src={blob1} alt="blob1" id="blob1" />
        <img src={blob2} alt="blob2" id="blob2" />
        <img src={blob3} alt="blob3" id="blob3" />
        <img src={blob4} alt="blob4" id="blob4" />

        <div style={{ width: "90vw", height: "70vh", marginTop: "20vh" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
          />
        </div>
      </div>
    );
  }
}

export default StemsScreen;
