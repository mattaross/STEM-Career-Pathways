import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar navbar-expand-sm navbar-dark non-home-nav">
            <NavLink className="navbar-brand" to="/" exact>STEM Career Pathfinder</NavLink>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <div className="dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="/find-pathways" exact role="button" id="dropdownMenuLinkAbout" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Find Your Pathway
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkAbout">
                            <NavLink className="dropdown-item" to="/find-pathways" exact>Info on Pathfinder Options</NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" to="/find-pathways/images" exact>Explore By Image</NavLink>
                            <NavLink className="dropdown-item" to="/find-pathways/interests" exact>Explore By Interests</NavLink>
                            <NavLink className="dropdown-item" to="/find-pathways/careers" exact>Explore By Career</NavLink>
                        </div>
                    </div>
                </li>
            </ul>
            {/* <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Log In</a>
                </li>
            </ul> */}
        </div>
    );
}

export default NavBar;