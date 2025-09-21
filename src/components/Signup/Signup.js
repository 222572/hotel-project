import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signup.css";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Alert } from "react-bootstrap";
import { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = React.useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  let name, value;

  function postUserData(event) {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  }

  const db = getDatabase();
  let navigate = useNavigate();
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      userData.username == "" ||
      userData.password == "" ||
      userData.email == "" ||
      userData.fullname == ""
    ) {
      alert("Please fill the input fields");
    } else {
      setError("");
      try {
        await signUp(
          userData.email,
          userData.password,
          userData.fullname,
          userData.username
        );
        navigate("/");
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <div className="signup-form-main">
        <div className="signup-form-signup-div">
          <h1 className="signup-form-signup-heading">Sign Up</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <center>
            <div>
              <TextField
                type="name"
                id="standard-basic"
                label="Full Name"
                variant="standard"
                className="signup-form-input-fields"
                name="fullname"
                value={userData.fullname}
                onChange={(event) => postUserData(event)}
              />
            </div>
            <div>
              <TextField
                typer="username"
                id="standard-basic"
                label="Username"
                variant="standard"
                className="signup-form-input-fields"
                name="username"
                value={userData.username}
                onChange={(event) => postUserData(event)}
              />
            </div>
            <div>
              <TextField
                type="email"
                id="standard-basic"
                label="Email"
                variant="standard"
                className="signup-form-input-fields "
                name="email"
                value={userData.email}
                onChange={(event) => postUserData(event)}
              />
            </div>
            <div>
              <TextField
                type="password"
                id="standard-basic"
                label="Password"
                variant="standard"
                className="signup-form-input-fields "
                name="password"
                value={userData.password}
                onChange={(event) => postUserData(event)}
              />
            </div>

            <Button
              variant="contained"
              className="signup-form-submit-btn"
              onClick={(e) => handleSubmit(e)}
            >
              Sign Up
            </Button>
          </center>
        </div>
      </div>
    </>
  );
};

export default Signup;
