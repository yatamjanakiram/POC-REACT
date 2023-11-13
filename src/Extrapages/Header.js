import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="images/logo.png" className="img-fluid1" alt="Image" style={{width: "45px"}}></img>
        <a className="navbar-brand" style={{color: "green", fontSize: "17px"}} href="#">
          SRI LAKSHMI NARASIMHA HOSPITAL
          <span>
                    <center style={{fontSize: "15px"}}>(NEURO AND GENERAL)</center>
                </span>
        </a>
        
        <div className="emergency-contact">
        <center>
        <div className="d-flex align-items-center">
          <a href="tel:9505099108">
            <img
              className="blinking-image" // Apply the blinking-image class
              src="images/logo5.jpg"
              alt=""
              height="50px"
              width="50px"
            />
            <br />
            9505099108
          </a>
          </div>
        </center>
      
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctors" className="nav-link">
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/images" className="nav-link ">
                Gallery
              </Link>
            </li>
            
            {/* <li className="nav-item">
              <Link to="/register" className="nav-link ">
                Login
              </Link>
            </li> */}
          </ul>
          {/* <div className="d-flex">
            <Link to="/DoctorForm">
              <button className="btn btn-primary">Appointment</button>
            </Link>
            
          </div> */}
        </div>
      </div>
    </nav>
  );
}
