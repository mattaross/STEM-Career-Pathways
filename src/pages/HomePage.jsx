import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
    return (
        <div id="home-wrapper" className="home-body">
            <nav className="navbar navbar-expand-sm navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/" onclick={handleLoginClick}>Log In</a>
                    </li> */}
                </ul>
            </nav>

            <h1 className="STEM">STEM</h1>
            <h1 className="title">is for EVERYONE!</h1>

            <div className="buttons">
                <NavLink to="/find-pathways"><button className="btn btn-outline-dark" type="button" name="button" onclick="window.location.href = 'select-option.html';">Find your pathway</button></NavLink>
                <br />
                {/* <button className="btn btn-outline-dark" type="button" name="button">Sign up</button> */}
            </div>
        </div>
    );
}

export default HomePage;