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
          <div className="card card-signin flex-row my-5 login__height">
            <div className="card-img-left d-none d-md-flex">
              {/* <!-- Background image for card set in CSS! --> */}
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">Log In</h5>
              <form className="form-signin">
                <div className="form-label-group login__input">
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
                <div className="custom-control custom-checkbox mb-3 ml-3">
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
                <hr className="my-4" />
                <Link to="/">
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Log In
                  </button>
                </Link>
                <div className="d-flex justify-content-center text-center mt-2">
                  Need new account?
                  <Link to="/register">
                    <p className="pl-2"> Register.</p>
                  </Link>
                </div>
                <Link to="/login">
                  <p className="text-center forget__password">
                    {" "}
                    Forget password?
                  </p>
                </Link>
                <hr className="mt-4 mb-5" />
                <button
                  className="btn btn-lg btn-google btn-block text-uppercase"
                  type="submit"
                >
                  <i className="fa fa-google"></i> Sign in with Google
                </button>
                <button
                  className="btn btn-lg btn-facebook btn-block text-uppercase mt-3"
                  type="submit"
                >
                  <i className="fa fa-facebook r-2"></i> Sign in with Facebook
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
