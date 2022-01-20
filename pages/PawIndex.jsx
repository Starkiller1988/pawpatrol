import React from "react";
import { Link } from "react-router-dom";

import Ryder from "../images/ryder.png";
import Chase from "../images/chase.png";
import Marshal from "../images/marshal.png";
import Rubble from "../images/rubble.png";
import Rocky from "../images/rocky.png";
import Sky from "../images/sky.png";
import Zuma from "../images/zuma.png";
import Everest from "../images/everest.png";
import Tracker from "../images/tracker.png";

import wav1 from "../Media/chase.wav";
import wav2 from "../Media/marshall.wav";
import wav3 from "../Media/rubble.wav";
import wav4 from "../Media/rocky.wav";
import wav5 from "../Media/skye.wav";
import wav6 from "../Media/zuma.wav";
import wav7 from "../Media/ryder.mp3";

function PawIndex() {
  let ChaseVoice = new Audio(wav1);

  const chase = () => {
    ChaseVoice.play();
  };

  let RyderVoice = new Audio(wav7);

  const ryder = () => {
    RyderVoice.play();
  }


  let MarshallVoice = new Audio(wav2);

  const marshall = () => {
    MarshallVoice.play();
  };

  let RubbleVoice = new Audio(wav3);

  const rubble = () => {
    RubbleVoice.play();
  };

  let RockyVoice = new Audio(wav4);

  const rocky = () => {
    RockyVoice.play();
  };

  let SkyeVoice = new Audio(wav5);

  const skye = () => {
    SkyeVoice.play();
  };

  let ZumaVoice = new Audio(wav6);

  const zuma = () => {
    ZumaVoice.play();
  };

  return (
    <>
      <div className="btn_index">
        <Link to="/">
          <button className="homebutton">HOME</button>
        </Link>
      </div>

      <div className="title-index">
        <h1>Paw Index</h1>
      </div>

      <div className="cardfield-row-one">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Ryder}
                alt="ryder"
                style={{ width: "150px", height: "130px", position: "relative", right: "25px" }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Ryder</h1>
              <p className="text-inner-paragraph">Trainer</p>
              <button onClick={ryder} className="paw-voice">Listen</button>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="pups"
                src={Chase}
                alt="ryder"
                style={{ width: "70px", height: "100px", position: "relative", top: "15px", left: "15px"  }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Chase</h1>
              <p className="text-inner-paragraph">Police Pupp</p>
              <button onClick={chase} className="paw-voice">
                Listen
              </button>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Marshal}
                alt="ryder"
                style={{ width: "100px", height: "120px" }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Marshall</h1>
              <p className="text-inner-paragraph">Fire Dep. Pupp</p>
              <button onClick={marshall} className="paw-voice">
                Listen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cardfield-row-two">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Rubble}
                alt="ryder"
                style={{ width: "120px", height: "120px", position: "relative", right: "6px" }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Rubble</h1>
              <p className="text-inner-paragraph">Construct Pupp</p>
              <button onClick={rubble} className="paw-voice">
                Listen
              </button>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Rocky}
                alt="ryder"
                style={{ width: "100px", height: "120px", }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Rocky</h1>
              <p className="text-inner-paragraph">Recycle Pupp</p>
              <button onClick={rocky} className="paw-voice">
                Listen
              </button>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Sky}
                alt="ryder"
                style={{ width: "100px", height: "120px", position: "relative", left: "5px"  }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Skye</h1>
              <p className="text-inner-paragraph">Flying Pupp</p>
              <button onClick={skye} className="paw-voice">
                Listen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cardfield-row-three">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Zuma}
                alt="ryder"
                style={{ width: "100px", height: "120px",  }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Zuma</h1>
              <p className="text-inner-paragraph">Aqua Pupp</p>
              <button onClick={zuma} className="paw-voice">
                Listen
              </button>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Everest}
                alt="ryder"
                style={{ width: "90px", height: "120px" }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Everest</h1>
              <p className="text-inner-paragraph">Snow Pupp</p>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={Tracker}
                alt="ryder"
                style={{ width: "120px", height: "130px", position: "relative", right: "10px" }}
              />
            </div>
            <div className="flip-card-back">
              <h1 className="text-inner">Tracker</h1>
              <p className="text-inner-paragraph">Forest Pupp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PawIndex;
