import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

import "./Register.css";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto my-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex">
              {/* <!-- Background image for card set in CSS! --> */}
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Log In</h5>
              <form className="form-signin">
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
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                <Link to="/">
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Log In
                  </button>
                </Link>
                <Link to="/register">
                  <p className="d-block text-center mt-2 small">Register</p>
                </Link>
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

export default Login;
