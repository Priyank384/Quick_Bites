import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            QuickBites
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              
            </ul>
            
            <div className="d-flex"> 
                <Link className="btn bg-white text-primary mx-1" to="/login">Login</Link>
             
                <Link className="btn bg-white text-primary mx-1" to="/signup">SignUp</Link>
            </div>
              
          </div>
        </div>
      </nav>
    </div>
  );
}