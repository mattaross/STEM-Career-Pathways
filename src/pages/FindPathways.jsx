import React from "react";
import { NavLink } from "react-router-dom";

import NavBar from "../components/NavBar";

function FindPathways() {
    return (
        <div class="page-container">
            <div class="content-wrap">
                <NavBar />

                <br />
                <h1 class="non-home-title">How would you like to explore pathways today?</h1>

                <br /><br /><br />

                <div class="options">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card option-card">
                                <div class="card-body">
                                    <h5 class="card-title">Explore Pathways by Image</h5>
                                    <p class="card-text">
                                        <span class="indent">Not</span> sure where to start? Look through this gallery
                                        of images from a whole range of careers and click one that looks interesting to
                                        you!  It could spark more ideas and lead you to explore other parts of the Pathfinder.
                                    </p>
                                </div>
                                {/* <em class="sign-in-reminder">If you want to save your progress and pathways, make sure to
                                sign up or sign in!</em> */}
                                <NavLink to="/find-pathways/images" class="btn btn-outline-dark option-btn">Try it now <span class="arrow">&#x2192;</span></NavLink>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card option-card">
                                <div class="card-body">
                                    <h5 class="card-title">Explore Pathways by Interest</h5>
                                    <p class="card-text">
                                        <span class="indent">What</span> are you interested in? Don't worry
                                        if it seems unrelated to STEM - everything is connected in some way!
                                        Select something from the list of interests and find out what careers
                                        are related to that topic.  Once you're done, start over and select a
                                        different interest.
                                    </p>
                                </div>
                                {/* <em class="sign-in-reminder">If you want to save your progress and pathways, make sure to
                                sign up or sign in!</em> */}
                                <NavLink to="/find-pathways/interests" class="btn btn-outline-dark option-btn">Try it now &#x2192;</NavLink>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4">
                            <div class="card option-card">
                                <div class="card-body">
                                    <h5 class="card-title">Explore Pathways by Career</h5>
                                    <p class="card-text">
                                        <span class="indent">Do</span> you already have a career in mind?
                                        If so, you may just want to view pathways towards that career and
                                        this option is for you.  Select a career from the list and view
                                        pathways from where you are to that end goal.  This includes classes
                                        to take, degrees to consider, and resources to help you along the way.
                                    </p>
                                </div>
                                {/* <em class="sign-in-reminder">If you want to save your progress and pathways, make sure to
                                sign up or sign in!</em> */}
                                <NavLink to="/find-pathways/careers" class="btn btn-outline-dark option-btn">Try it now &#x2192;</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br />
            <footer>
                <hr />
                <p class="footer-text"><strong>STEM Career Pathfinder</strong></p>
            </footer>
        </div>
    );
}

export default FindPathways;