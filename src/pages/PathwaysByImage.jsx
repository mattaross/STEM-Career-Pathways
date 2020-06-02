import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import careersInfo from "../util/careersInfo";

function PathwaysByImage() {
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  const randomizedCareerArray = shuffle(careersInfo);

  return (
    <div class="page-container">
      <div class="content-wrap">
        <NavBar />

        <div class="icon-container">
          <i class="fas fa-tools fa-8x"></i>
        </div>
        <h1 class="non-home-title">Explore Pathways by Image</h1>
        <br /><br />
        <div className="row careers-by-image-row">
          {randomizedCareerArray.map((career, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 career-img-card">
                <Link to={`/careers/${career.id}`}>
                  <img className="by-image-image" src={`${process.env.PUBLIC_URL}/${career.imagePath}`} alt="Career Image" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <br /><br />
      <footer>
        <hr />
        <p class="footer-text"><strong>STEM Career Pathfinder</strong></p>
      </footer>
    </div>
  );
}

export default PathwaysByImage;