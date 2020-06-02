import React from "react";
import { withRouter } from "react-router-dom";

import NavBar from "../components/NavBar";
import careersInfo from "../util/careersInfo";

function SelectedCareersByInterest(props) {
    const selectedInterests = props.location.state.selectedInterests;

    // const selectedInterests = this.props.location.state.selectedInterests;

    let selectedCareers = [];
    selectedInterests.forEach(interest => {
        careersInfo.forEach(career => {
            if (career.relatedInterests.includes(interest)) {
                if (!selectedCareers.includes(career)) {
                    selectedCareers.push(career);
                }
            }
        });
    });

    return (
        <div class="page-container">
            <div class="content-wrap">
                <NavBar />

                <p className="by-interest-page-text">Here are some careers that you might enjoy based on your interests.  Click the dropdown buttons to see more information!</p>
                {selectedCareers.map((career, index) => {
                    return (
                        <div class="accordion careers-accordion careers-by-interest-accordion" id={`${career.id}Accordion`}>
                            <div class="card accordion-card">
                                <div class="card-header accordion-card-header" id={`${career.id}Heading`}>
                                    <h2>{career.title}</h2>
                                    <h2 class="mb-0">
                                        <button class="btn btn-link collapsed by-interest-accordion-btn dropdown-toggle" type="button" data-toggle="collapse" data-target={`#${career.id}Collapse`} aria-expanded="false" aria-controls={`${career.id}Collapse`}></button>
                                    </h2>
                                </div>
                                <div id={`${career.id}Collapse`} class="collapse" aria-labelledby={`${career.id}Heading`} data-parent={`#${career.id}Accordion`}>
                                    <div class="card-body accordion-card-body">
                                        <p className="card-text career-card-text">{career.description}</p>
                                        <br />
                                        <div className="career-card-split-container">
                                            <div className="career-card-split-container-left">
                                                <h6><strong>Minimum education requirements:</strong></h6>
                                                <p className="card-text career-card-text">{career.education}</p>
                                                <br />
                                                <h6><strong>Average salary:</strong></h6>
                                                <p className="card-text career-card-text">{career.avgSalary}</p>
                                                <br />
                                                <h6><strong>Local education opportunities:</strong></h6>
                                                <ul>
                                                    {career.localEdOpps.map((opp, index) => {
                                                        return <li className="card-text career-card-text">{opp}</li>
                                                    })}
                                                </ul>
                                                <h6><strong>Local employers:</strong></h6>
                                                <ul>
                                                    {career.localEmployers.map((emp, index) => {
                                                        return <li className="card-text career-card-text">{emp}</li>
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="career-card-split-container-right">
                                                <img className="career-card-img" src={`${process.env.PUBLIC_URL}/${career.imagePath}`} alt="Career Image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <br /><br /><br />
            <footer>
                <hr />
                <p class="footer-text"><strong>STEM Career Pathfinder</strong></p>
            </footer>
        </div>
    );
}

export default withRouter(SelectedCareersByInterest);