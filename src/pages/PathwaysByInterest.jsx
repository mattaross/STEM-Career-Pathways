import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import bodyParser from "body-parser";

import NavBar from "../components/NavBar";
import careersInfo from "../util/careersInfo";

function PathwaysByInterest(props) {
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

  let interestsList = [];
  careersInfo.forEach(career => {
    career.relatedInterests.forEach(interest => {
      if (!interestsList.includes(interest)) {
        interestsList.push(interest);
      }
    });
  });

  const randomizedInterestsList = shuffle(interestsList)

  let selectedInterests = [];
  function handleCheckboxChange(event) {
    if (!selectedInterests.includes(event.target.value)) {
      selectedInterests.push(event.target.value);
    } else {
      selectedInterests = selectedInterests.filter(interest => {
        return interest !== event.target.value;
      });
    }
  } 

  function handleSubmit(event) {
    event.preventDefault();
    
    props.history.push({
      pathname: "/careers-by-interest",
      state: { selectedInterests: selectedInterests }
    });
  }

  return (
    <div class="page-container">
      <div class="content-wrap">
        <NavBar />

        <div class="icon-container">
          <i class="fas fa-paint-brush fa-8x"></i>
        </div>
        <h1 class="non-home-title">Explore Pathways by Interest</h1>
        <p className="by-interest-selection-page-text">
          Chances are, some of the things that already interest you are connected to careers that you could pursue.
          Select as many interests as you want from the list below.  Then, hit submit and you'll see a whole customized
          list of career possibilities that you can look into!
        </p>

        <form className="interest-tiles-area" onSubmit={handleSubmit}>
          <div className="row">
            {randomizedInterestsList.map(interest => {
              return (
                <div className="col-lg-2 col-md-4 col-sm-6 interest-checkboxes">
                  <input type="checkbox" onChange={handleCheckboxChange} name={`${interest}`} value={`${interest}`} id={`${interest}`} />
                  <label className="card interest-tile" for={`${interest}`}>
                    <div className="card-body">
                      <h4><strong>{interest}</strong></h4>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
          {/* <Route path="/careers-by-interest" render={(props) => <SubmitButton {...props} />} /> */}
          <button type="submit" name="button" class="btn btn-primary by-interest-submit-btn">Submit - find your pathways!</button>
        </form>
      </div>

      <br />
      <footer>
        <hr />
        <p class="footer-text"><strong>STEM Career Pathfinder</strong></p>
      </footer>
    </div>
  );
}

export default withRouter(PathwaysByInterest);