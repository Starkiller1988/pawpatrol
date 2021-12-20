import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <div className="btn_index">
        <Link to="/">
          <button className="homebutton">HOME</button>
        </Link>
      </div>
    </>
  );
}

export default AboutPage;
