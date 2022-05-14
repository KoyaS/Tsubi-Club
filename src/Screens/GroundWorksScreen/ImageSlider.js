import React, { Component, useState } from "react";

const cybbe = require("../../assets/GroundWorksScreen/slides/cybbe_.jpeg");
const cybbe2 = require("../../assets/GroundWorksScreen/slides/cybbe_2.jpeg");

export default class ImageSlider extends Component {
  state = {
    slideIndex: 0,
    firstClick: true,
  };

  //   constructor(props) {
  //     super(props);

  //     // const [slideIndex, setSlideIndex] = useState(0);
  //     // const [firstClick, setFirstClick] = useState(true);
  //   }

  render() {
    return (
      <a className="carouselslide">
        <p style={{ color: "white" }}>click photo to see next image</p>
        <img
          src={this.props.images[this.state.slideIndex]}
          alt={"eaheh"}
          className={"carouselimage"}
          onClick={() => {
            if (!this.state.firstClick) {
            //   setSlideIndex(slideIndex + 1);
            this.setState({slideIndex: this.state.slideIndex+1})
              if (this.state.slideIndex === this.props.images.length - 1) {
                // setSlideIndex(0);
                this.setState({slideIndex: 0})
              }
            } else {
            //   setFirstClick(false);
                this.setState({firstClick: false})
            }
          }}
        />
        <p style={{ color: "white" }}>{this.props.caption}</p>
      </a>
    );
  }
}
