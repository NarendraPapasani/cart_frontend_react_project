import React, { useState, useEffect } from "react";
import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Navigate } from "react-router-dom";
import Navbar from "../Navbar";
const overrideStyles = {
  display: "block",
  margin: "0 auto",
  borderColor: "brown",
};

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "mobileNumber") {
      setMobileNumber(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchUserData();
  };

  const fetchUserData = async () => {
    setLoading(true);
    const url = "https://apis.ccbp.in/login";
    const data = { username, password };
    const opt = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const resp = await fetch(url, opt);
    const respData = await resp.json();
    if (resp.ok === true) {
      setLoading(false);
      Cookies.set("jwtToken", respData.jwt_token, { expires: 1 });
      navigate("/");
    } else if (resp.status === 400) {
      setLoading(false);
      setErrorMsg(`*${respData.error_msg}`);
    } else {
      setLoading(false);
      alert("Something went wrong");
    }
  };
  const jwtToken = Cookies.get("jwtToken");

  const toggleForm = () => {
    setIsSignUp((prevState) => !prevState);
    setUsername("");
    setPassword("");
    setMobileNumber("");
  };

  useEffect(() => {
    // This effect will run only once, on component mount
    // You can add any side effects here, like fetching data or setting up event listeners
  }, []);
  const Loader = () => {
    return (
      <div>
        <div className="sweet-loading">
          <ClipLoader
            cssOverride={overrideStyles}
            size={20}
            color={"white"}
            loading={loading}
            speedMultiplier={1.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="main-login">
        <Navbar />
        <div className="login-signup-container">
          <div className="form-wrapper">
            <h2 className="form-title">{isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form onSubmit={handleSubmit} className="form-content">
              <div className="form-group">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              )}
              <p className="error-msg">{errorMsg}</p>
              {loading ? (
                <button type="submit" className="submit-btns">
                  {Loader()}
                </button>
              ) : (
                <button type="submit" className="submit-btn">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </button>
              )}
            </form>
            <p className="toggle-form">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button type="button" onClick={toggleForm} className="toggle-btn">
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  } else {
    return renderContent();
  }
};

export default Login;
