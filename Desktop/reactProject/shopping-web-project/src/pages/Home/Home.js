import React from "react";
import skyBG from "./img/skyBG.png";
import moonSun from "./img/moonSun.png";
import nightCloud1 from "./img/nightCloud1.png";
import nightCloud2 from "./img/nightCloud2.png";
import dayCloud1 from "./img/dayCloud1.png";
import dayCloud2 from "./img/dayCloud2.png";
import lineSkyBG from "./img/lineSkyBG.png";
import './Home.css';
const Home = () => {
  return (
    <div className="wholeContainer">
      <section id="landingPage" className="containerr">
        <div className="cloudBox">
          <img src={skyBG} alt="skyBg" className="skyBackground" />
          <img src={moonSun} alt="moonSun" className="moonSun" />
          <img
            src={nightCloud1}
            alt="nightCloud1"
            className="nightCloud1 nightCloudMovingLeft"
          />
          <img
            src={nightCloud2}
            alt="nightCloud2"
            className="nightCloud2 nightCloudMovingRight"
          />
          <img
            src={dayCloud1}
            alt="dayCloud1"
            className="dayCloud1 dayCloudMovingLeft"
          />
          <img
            src={dayCloud2}
            alt="dayCloud2"
            className="dayCloud2 dayCloudMovingRight"
          />
          <img src={lineSkyBG} alt="lineSky" className="lineSkyBG" />

          <ul className="bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="brandTextBox">
          <svg
            width="1238"
            height="304"
            viewBox="0 0 1238 304"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M235.934 294.8C173.494 300.4 121.694 303.2 80.5336 303.2C53.0936 303.2 32.9336 296.76 20.0536 283.88C7.17359 271 0.733595 250.84 0.733595 223.4V89C0.733595 59.6 7.3136 38.32 20.4736 25.16C33.9136 11.72 55.3336 4.99998 84.7336 4.99998H235.934V63.8H101.534C84.7336 63.8 76.3336 72.2 76.3336 89V223.4C76.3336 229.84 78.1536 235.02 81.7936 238.94C85.7136 242.58 90.6136 244.4 96.4936 244.4C102.374 244.4 108.814 244.4 115.814 244.4C122.814 244.12 130.094 243.84 137.654 243.56C145.214 243.28 152.774 243 160.334 242.72C168.174 242.44 178.114 241.88 190.154 241.04C202.474 240.2 217.734 239.22 235.934 238.1V294.8ZM500.583 84.8C500.583 68 492.183 59.6 475.383 59.6H403.983C387.183 59.6 378.783 68 378.783 84.8V219.2C378.783 236 387.183 244.4 403.983 244.4H475.383C492.183 244.4 500.583 236 500.583 219.2V84.8ZM576.183 219.2C576.183 248.6 569.463 270.02 556.023 283.46C542.863 296.62 521.583 303.2 492.183 303.2H387.183C357.783 303.2 336.363 296.62 322.923 283.46C309.763 270.02 303.183 248.6 303.183 219.2V84.8C303.183 55.4 309.763 34.12 322.923 20.96C336.363 7.51998 357.783 0.799984 387.183 0.799984H492.183C521.583 0.799984 542.863 7.51998 556.023 20.96C569.463 34.12 576.183 55.4 576.183 84.8V219.2ZM660.38 4.99998H836.78C866.18 4.99998 887.46 11.72 900.62 25.16C914.06 38.32 920.78 59.6 920.78 89V126.8C920.78 150.04 916.86 168.1 909.02 180.98C901.46 193.86 889.28 202.4 872.48 206.6L924.98 299H843.08L794.78 210.8H735.98V299H660.38V4.99998ZM845.18 89C845.18 72.2 836.78 63.8 819.98 63.8H735.98V152H819.98C836.78 152 845.18 143.6 845.18 126.8V89ZM1237.76 299H1004.66V4.99998H1237.76V63.8H1080.26V120.5H1204.16V179.3H1080.26V240.2H1237.76V299Z"
              fill="#9C9C9C"
              fill-opacity="0.3"
            />
          </svg>
        </div>
        <div className="lineDesk"></div>
        <div className="desk"></div>
        <div className="book"></div>
        <div className="hedgy"></div>

        <div className="textBox textBoxTopLeft">
          <div className="arrow"></div>
          <div className="box"></div>
        </div>
        <div className="textBox textBoxTopRight">
          <div className="arrow"></div>
          <div className="box"></div>
        </div>
        <div className="textBox textBoxBottomRight">
          <div className="arrowBottom"></div>
          <div className="boxBottom"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
