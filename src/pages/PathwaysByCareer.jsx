import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

function PathwaysByCareer() {
    return (
        <div class="page-container">
            <div class="content-wrap">
                <NavBar />

                <br /><br />

                <div class="accordion careers-accordion" id="scienceAccordion">
                    <div class="card accordion-card">
                        <div class="card-header accordion-card-header" id="scienceHeading">
                            <h2>Science</h2>
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed accordion-btn dropdown-toggle" type="button" data-toggle="collapse" data-target="#scienceCollapse" aria-expanded="false" aria-controls="scienceCollapse"></button>
                            </h2>
                        </div>
                        <div id="scienceCollapse" class="collapse" aria-labelledby="scienceHeading" data-parent="#scienceAccordion">
                            <div class="card-body accordion-card-body">
                                <div class="accordion" id="healthAccordion">
                                    <div class="card-header subAccordion-header" id="healthHeading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed dropdown-toggle subAccordion-btn" type="button" data-toggle="collapse" data-target="#healthCollapse" aria-expanded="false" aria-controls="healthCollapse">
                                                Health/Medicine
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="healthCollapse" class="collapse" aria-labelledby="healthHeading" data-parent="#healthAccordion">
                                        <div class="card-body subAccordion-body">
                                            <ul className="subAccordion-list">
                                                <li><Link to="/careers/c2">Pharmacist</Link></li>
                                                <li><Link to="/careers/c1">Dental Hygienist</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="accordion careers-accordion" id="techAccordion">
                    <div class="card accordion-card">
                        <div class="card-header accordion-card-header" id="techHeading">
                            <h2>Technology/Trades</h2>
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed accordion-btn dropdown-toggle" type="button" data-toggle="collapse" data-target="#techCollapse" aria-expanded="false" aria-controls="techCollapse"></button>
                            </h2>
                        </div>
                        <div id="techCollapse" class="collapse" aria-labelledby="techHeading" data-parent="#techAccordion">
                            <div class="card-body accordion-card-body">
                                <div class="accordion" id="tradesAccordion">
                                    <div class="card-header subAccordion-header" id="tradesHeading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed dropdown-toggle subAccordion-btn" type="button" data-toggle="collapse" data-target="#tradesCollapse" aria-expanded="false" aria-controls="tradesCollapse">
                                                Trades
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="tradesCollapse" class="collapse" aria-labelledby="tradesHeading" data-parent="#tradesAccordion">
                                        <div class="card-body subAccordion-body">
                                            <ul className="subAccordion-list">
                                                <li><Link to="/careers/c3">Automatice Service Technician</Link></li>
                                                <li><Link to="/careers/c4">Welder</Link></li>
                                                <li><Link to="/careers/c5">Masonry Worker</Link></li>
                                                <li><Link to="/careers/c6">Carpenter</Link></li>
                                                <li><Link to="/careers/c7">Plumber</Link></li>
                                                <li><Link to="/careers/c8">Heavy Equipment Operator</Link></li>
                                                <li><Link to="/careers/c9">Electrician</Link></li>
                                                <li><Link to="/careers/c10">HVAC Technician</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="accordion careers-accordion" id="engAccordion">
                    <div class="card accordion-card">
                        <div class="card-header accordion-card-header" id="engHeading">
                            <h2>Engineering</h2>
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed accordion-btn dropdown-toggle" type="button" data-toggle="collapse" data-target="#engCollapse" aria-expanded="false" aria-controls="engCollapse"></button>
                            </h2>
                        </div>
                        <div id="engCollapse" class="collapse" aria-labelledby="engHeading" data-parent="#engAccordion">
                            <div class="card-body accordion-card-body">
                                <div class="accordion" id="elecEngAccordion">
                                    <div class="card-header subAccordion-header" id="elecEngHeading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed dropdown-toggle subAccordion-btn" type="button" data-toggle="collapse" data-target="#elecEngCollapse" aria-expanded="false" aria-controls="elecEngCollapse">
                                                Electrical and Computer Engineering
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="elecEngCollapse" class="collapse" aria-labelledby="elecEngHeading" data-parent="#elecEngAccordion">
                                        <div class="card-body subAccordion-body">
                                            <ul className="subAccordion-list">
                                                <li><Link to="/careers/c11">Computer Hardware Engineer</Link></li>
                                                <li><Link to="/careers/c12">Software Engineer/Software Developer</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="accordion careers-accordion" id="artAccordion">
                    <div class="card accordion-card">
                        <div class="card-header accordion-card-header" id="artHeading">
                            <h2>Art</h2>
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed accordion-btn dropdown-toggle" type="button" data-toggle="collapse" data-target="#artCollapse" aria-expanded="false" aria-controls="artCollapse"></button>
                            </h2>
                        </div>
                        <div id="artCollapse" class="collapse" aria-labelledby="artHeading" data-parent="#artAccordion">
                            <div class="card-body accordion-card-body">
                                <div class="accordion" id="designAccordion">
                                    <div class="card-header subAccordion-header" id="designHeading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed dropdown-toggle subAccordion-btn" type="button" data-toggle="collapse" data-target="#designCollapse" aria-expanded="false" aria-controls="designCollapse">
                                                Design
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="designCollapse" class="collapse" aria-labelledby="designHeading" data-parent="#designAccordion">
                                        <div class="card-body subAccordion-body">
                                            <ul className="subAccordion-list">
                                                <li><Link to="/careers/c13">Graphic Designer</Link></li>
                                                <li><Link to="/careers/c14">Multimedia Artist and Animator</Link></li>
                                                <li><Link to="/careers/c15">Game Designer</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="accordion careers-accordion" id="mathAccordion">
                    <div class="card accordion-card">
                        <div class="card-header accordion-card-header" id="mathHeading">
                            <h2>Mathematics</h2>
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed accordion-btn dropdown-toggle" type="button" data-toggle="collapse" data-target="#mathCollapse" aria-expanded="false" aria-controls="mathCollapse"></button>
                            </h2>
                        </div>
                        <div id="mathCollapse" class="collapse" aria-labelledby="mathHeading" data-parent="#mathAccordion">
                            <div class="card-body accordion-card-body">
                                <div class="accordion" id="financeAccordion">
                                    <div class="card-header subAccordion-header" id="financeHeading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed dropdown-toggle subAccordion-btn" type="button" data-toggle="collapse" data-target="#financeCollapse" aria-expanded="false" aria-controls="financeCollapse">
                                                Finance
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="financeCollapse" class="collapse" aria-labelledby="financeHeading" data-parent="#financeAccordion">
                                        <div class="card-body subAccordion-body">
                                            <ul className="subAccordion-list">
                                                <li><Link to="/careers/c16">Accountant</Link></li>
                                                <li><Link to="/careers/c17">Actuary</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion" id="dataAccordion">
                                    <div class="card-header subAccordion-header" id="dataHeading">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed dropdown-toggle subAccordion-btn" type="button" data-toggle="collapse" data-target="#dataCollapse" aria-expanded="false" aria-controls="dataCollapse">
                                                Data
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="dataCollapse" class="collapse" aria-labelledby="dataHeading" data-parent="#dataAccordion">
                                        <div class="card-body subAccordion-body">
                                            <ul className="subAccordion-list">
                                                <li><Link to="/careers/c18">Data Scientist</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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

export default PathwaysByCareer;