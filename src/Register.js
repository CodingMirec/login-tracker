import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

import "./Register.css";

function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto my-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex">
              {/* <!-- Background image for card set in CSS! --> */}
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputUserame"
                    className="form-control"
                    placeholder="Username"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputUserame">Username</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <hr />
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputConfirmPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputConfirmPassword">Confirm password</label>
                </div>
                <Link to="/">
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                </Link>
                <div className="d-flex justify-content-center text-center mt-2">
                  Already have an account?
                  <Link to="/login">
                    <p className="pl-2">Log In.</p>
                  </Link>
                </div>
                <hr className="my-4" />
                <button
                  className="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fa fa-google"></i> Sign up with Google
                </button>
                <button
                  className="btn btn-lg btn-facebook btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fa fa-facebook r-2"></i> Sign up with Facebook
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
