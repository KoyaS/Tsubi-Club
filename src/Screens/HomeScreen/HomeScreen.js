import "./HomeScreen.css";
import bitchlogo from "../../assets/HomeScreen/bitchclublogo.png";
import tsubihair from "../../assets/HomeScreen/bitchhair.gif";
import lacedup from "../../assets/HomeScreen/lacedup.mp4";
import burbank from "../../assets/HomeScreen/burbank.mp4";
import sparks from "../../assets/HomeScreen/background sparks.mp4";
import burbankpreview from "../../assets/HomeScreen/burbankpreview.mp4";
import concert from "../../assets/HomeScreen/concert.mp4";
import scrollicon from "../../assets/HomeScreen/scrollicon.png";
import rocketboots from "../../assets/HomeScreen/rocketboots.png";
import twitter from "../../assets/logos/twitter.png";
import instagram from "../../assets/logos/instagram.png";
import spotify from "../../assets/logos/spotify.png";
import ripple from "../../assets/HomeScreen/ripple.gif";

function HomeScreen() {
  var position = 0;
  document.addEventListener("mousewheel", (event) => {
    console.log(position);
    position += event.deltaY;
    if (position > 0) {
      position = 0;
    }
    var background = document.getElementsByClassName("backgroundcontainer");
    for (var i = 0; i < background.length; i++) {
      var slide = background[i];
      if (position < -1 * slide.clientWidth * (background.length - 1)) {
        position = -1 * slide.clientWidth * (background.length - 1);
      }
      slide.style.transform =
        "translate(" + (position + i * slide.clientWidth) + "px, 0px)";
    }
  });

  var menuextended = false;

  return (
    <div className="Main">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <img src={tsubihair} alt="Tsubi Hair" id="tsubihair" />
      <img src={bitchlogo} alt="Bitch Club Logo" id="bitchlogo" />
      <img src={scrollicon} alt="Scroll Icon" id="scrollicon" />
      <img src={ripple} alt="ripple" id="rippleicon" />
      <a
        onClick={() => {
          var twittericon = document.getElementById("twitterlogo");
          var instagramicon = document.getElementById("instagramlogo");
          var spotifyicon = document.getElementById("spotifylogo");
          if (!menuextended) {
            twittericon.style.transform = "translate(0, 135px)";
            twittericon.style.opacity = 1;
            instagramicon.style.transform = "translate(0, 225px)";
            instagramicon.style.opacity = 1;
            spotifyicon.style.transform = "translate(0, 325px)";
            spotifyicon.style.opacity = 1;
            menuextended = true;
          } else {
            twittericon.style.transform = "translate(0, 0px)";
            twittericon.style.opacity = 0;
            instagramicon.style.transform = "translate(0, 0px)";
            instagramicon.style.opacity = 0;
            spotifyicon.style.transform = "translate(0, 0px)";
            spotifyicon.style.opacity = 0;
            menuextended = false;
          }
        }}
        id="rocketboots"
      >
        <img src={rocketboots} alt="Rocket Boots" id="rocketboots" />
      </a>
      <a href="https://twitter.com/tsubiclub">
        <img
          src={twitter}
          alt="Twitter Logo"
          className="logoicon"
          id="twitterlogo"
        />
      </a>
      <a href="https://www.instagram.com/tsunamibitchclub/">
        <img
          src={instagram}
          alt="Instagram Logo"
          className="logoicon"
          id="instagramlogo"
        />
      </a>
      <a href="https://open.spotify.com/artist/6fHEaFnFgMxMAtDt7mFoQ3">
        <img
          src={spotify}
          alt="Spotify Logo"
          className="logoicon"
          id="spotifylogo"
        />
      </a>

      <a
        href="https://tsubistems.cargo.site/"
        id="stemsbuttonlink"
        onMouseEnter={() => {
          var verticalline = document.getElementById("verticalline");
          var horizontalline = document.getElementById("horizontalline");
          verticalline.style.transform = "translate(25vw, 0)";
          horizontalline.style.transform = "translate(0, 69.3vh)";
        }}
      >
        <div className="clippedbuttonoutline" id="stemsbutton">
          <div className="clippedbutton">stems</div>
        </div>
      </a>
      <a
        href="/#/GroundWorks"
        className="clippedbuttonlink"
        onMouseEnter={() => {
          var verticalline = document.getElementById("verticalline");
          var horizontalline = document.getElementById("horizontalline");
          verticalline.style.transform = "translate(65vw, 0)";
          horizontalline.style.transform = "translate(0, 79.3vh)";
        }}
      >
        <div className="clippedbuttonoutline" id="groundworksbutton">
          <div className="clippedbutton">ground works</div>
        </div>
      </a>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="clippedbuttonlink"
        onMouseEnter={() => {
          var verticalline = document.getElementById("verticalline");
          var horizontalline = document.getElementById("horizontalline");
          verticalline.style.transform = "translate(80vw, 0)";
          horizontalline.style.transform = "translate(0, 89.3vh)";
        }}
      >
        <div className="clippedbuttonoutline" id="griddybutton">
          <div className="clippedbutton">griddy</div>
        </div>
      </a>
      <div className="backgroundcontainer">
        <video autoPlay muted loop className="backgroundvideo">
          <source src={sparks} type="video/mp4" />
        </video>
      </div>
      <div className="backgroundcontainer startoffscreen" id="concertcontainer">
        <video autoPlay muted loop className="backgroundvideo">
          <source src={concert} type="video/mp4" />
        </video>
      </div>
      <div className="backgroundcontainer startoffscreen" id="burbankcontainer">
        <video autoPlay muted loop className="backgroundvideo">
          <source src={burbank} type="video/mp4" />
        </video>
      </div>
      <div className="backgroundcontainer startoffscreen" id="lacedupcontainer">
        <video autoPlay muted loop className="backgroundvideo">
          <source src={lacedup} type="video/mp4" />
        </video>
      </div>
      <div
        className="backgroundcontainer startoffscreen"
        id="burbankpreviewcontainer"
      >
        <video autoPlay muted loop className="backgroundvideo">
          <source src={burbankpreview} type="video/mp4" />
        </video>
      </div>
      <div id="verticalline" />
      <div id="horizontalline" />
    </div>
  );
}

export default HomeScreen;
