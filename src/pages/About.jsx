import React from "react";

import NavBar from "../components/NavBar";

function About() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <NavBar />

                <br />
                <h1 className="non-home-title">About the STEM Career Pathfinder</h1>
                <br />
                <div className="icon-container">
                    <i className="fas fa-atom fa-10x"></i>
                </div>
                <br /><br />
                <div className="about-container">
                    <p>
                        We believe that STEM (Science, Technology, Engineering, and Mathematics
                        is for <span className="underlined-text">everyone</span>.
                        Sometimes, though, it is hard to imagine a pathway from where you are to a
                        career in STEM.  That's why we developed the STEM Career Pathfinder!  By finding
                        out a little bit about you, we can connect you to resources, help you find
                        degree programs and industries that might interest you, and hopefully get you
                        started down a path that excites you.
                    </p>
                    <br />
                    <p>
                        If you've ever felt that you did not belong in STEM settings or that your
                        interests were not related to STEM - this site is for you.  If you already love
                        STEM and just want to get more ideas of where it can take you - this site is
                        also for you!
                    </p>
                    <br />
                    <hr />
                    <br />
                    <div className="icon-container">
                        <i className="fas fa-compass fa-10x"></i>
                    </div>
                    <br /><br />
                    <p>There are a few ways to interact with the STEM Career Pathfinder:</p>
                    <ol>
                        <li>
                            Take the Pathfinder quiz and get some personalized results based on
                            your responses.
                        </li>
                        <br />
                        <li>
                            View pathways by interest: select something from a master list of interests
                            and see some of the opportunities, degrees, and careers related to that interest.
                        </li>
                        <br />
                        <li>
                            View pathways by career: if you already have an idea of the kind of career
                            that interests you, select it from our list and view the pathways, including
                            classes to take and resources to explore, that can lead you there.
                        </li>
                    </ol>
                    <br />
                    <hr />
                    <br />
                    <div className="icon-container">
                        <i className="fas fa-user fa-10x"></i>
                    </div>
                    <br /><br />
                    <p>
                        Sign up for a free account so that you can make as many pathways as you want
                        and save them all to revisit later.  This way you can explore all your
                        interests/career possibilities and keep the possibilities wide open!
                    </p>
                </div>
            </div>

            <br /><br /><br />
            <footer>
                <hr />
                <p className="footer-text"><strong>STEM Career Pathfinder</strong></p>
            </footer>
        </div>
    );
}

export default About;