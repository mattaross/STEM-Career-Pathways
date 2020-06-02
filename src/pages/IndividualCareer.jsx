import React from "react";
import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";
import careersInfo from "../util/careersInfo";

function IndividualCareer() {
    const careerId = useParams().careerId;

    const selectedCareer = careersInfo.filter(career => career.id === careerId)[0];

    const selectedImage = selectedCareer.imagePath;

    return (
        <div class="page-container">
            <div class="content-wrap">
                <NavBar />

                <br /><br />

                <div className="card career-card">
                    <div className="card-body">
                        <h5 className="card-title career-card-title">{selectedCareer.title}</h5>
                        <br />
                        <p className="card-text career-card-text">{selectedCareer.description}</p>
                        <br />
                        <div className="career-card-split-container">
                            <div className="career-card-split-container-left">
                                <h6><strong>Minimum education requirements:</strong></h6>
                                <p className="card-text career-card-text">{selectedCareer.education}</p>
                                <br />
                                <h6><strong>Average salary:</strong></h6>
                                <p className="card-text career-card-text">{selectedCareer.avgSalary}</p>
                                <br />
                                <h6><strong>Local education opportunities:</strong></h6>
                                <ul>
                                    {selectedCareer.localEdOpps.map((opp, index) => {
                                        return <li className="card-text career-card-text">{opp}</li>
                                    })}
                                </ul>
                                <h6><strong>Local employers:</strong></h6>
                                <ul>
                                    {selectedCareer.localEmployers.map((emp, index) => {
                                        return <li className="card-text career-card-text">{emp}</li>
                                    })}
                                </ul>
                            </div>
                            <div className="career-card-split-container-right">
                                <img className="career-card-img" src={`${process.env.PUBLIC_URL}/${selectedImage}`} alt="Career Image" />
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

export default IndividualCareer;