import React, { Component } from "react";
import "./GroundWorksScreen.css";
import header from "../../assets/GroundWorksScreen/rightheader.png";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import xtype from "xtypejs";
import ImageSlider from "./ImageSlider";

// used this site for carousel reference:
// https://codesandbox.io/s/22y75?file=/src/example.js:1203-1310

const waderpic = require("../../assets/GroundWorksScreen/slides/waderwadeee.jpeg");
const pigeonpic = require("../../assets/GroundWorksScreen/slides/pigeonfeatherss.png");
const franxxpic = require("../../assets/GroundWorksScreen/slides/boyfranxx.jpeg");
const tinothewizard = require("../../assets/GroundWorksScreen/slides/TinotheWizard.jpeg");
const acceptance = require("../../assets/GroundWorksScreen/slides/acceptance.jpeg");
const cybbe = require("../../assets/GroundWorksScreen/slides/cybbe_.jpeg");
const cybbe2 = require("../../assets/GroundWorksScreen/slides/cybbe_2.jpeg");
const cybbe3 = require("../../assets/GroundWorksScreen/slides/cybbe_3.jpeg");
const cybbe4 = require("../../assets/GroundWorksScreen/slides/cybbe_4.jpeg");
const riift = require("../../assets/GroundWorksScreen/slides/ProdRiiFT.jpeg");
const kvrohs = require("../../assets/GroundWorksScreen/slides/kvrohs.jpeg");
const kvrohs2 = require("../../assets/GroundWorksScreen/slides/kvrohs2.jpeg");
const kvrohs3 = require("../../assets/GroundWorksScreen/slides/kvrohs3.jpeg");
const rxmorse = require("../../assets/GroundWorksScreen/slides/rxmorsevisuals.png");

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
      image: [cybbe3, cybbe4],
      caption: "@cybbe_",
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
      image: [kvrohs, kvrohs2, kvrohs3],
      caption: "@kvrohs",
    },
    {
      image: franxxpic,
      caption: "@boyfranxx",
    },
    {
      image: tinothewizard,
      caption: "@TinotheWizard",
    },
    {
      image: [cybbe, cybbe2],
      caption: "@cybbe_",
    },
    {
      image: riift,
      caption: "@ProdRiiFT",
    },
    {
      image: rxmorse,
      caption: "@rxmorsevisuals",
    },
  ];

  slides = [];
  slide_refs = [];

  constructor(props) {
    super(props);

    for (var index in this.carousel_content) {
      var content = this.carousel_content[index];
      if (xtype(content.image) === "multi_char_string") {
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
      } else {
        var slide_ref = React.createRef();
        this.slides.push({
          key: uuidv4(),
          content: (
            <ImageSlider
              images={content.image}
              caption={content.caption}
              goToSlide={this.state.goToSlide}
              sliderIndex={index}
              ref={slide_ref}
            />
          ),
        });
        this.slide_refs.push([index, slide_ref]);
      }
    }

    this.slides = this.slides.map((slide, index) => {
      return {
        ...slide,
        onClick: () => {
          this.setState({ goToSlide: index });
          for (var i in this.slide_refs) {
            if (parseInt(this.slide_refs[i][0]) !== index) {
              console.log(this.slide_refs[i]);
              this.slide_refs[i][1].current.state.firstClick = true;
            }
          }
        },
      };
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
          className="backblob"
        />
        <a href="/">
          <img
            src={backblob}
            alt="backblob"
            id="backblob"
            className="backblob"
          />
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
