import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [allData, setAllData] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    profilepicture: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setAllData({
      ...allData,
      [id]: value,
    });
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axios
      .post(`https://pehlapehla.herokuapp.com/personal/post`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
     
      <h1>Register your self here </h1>
      <form onSubmit={handleSignupSubmit}>
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          placeholder=""
          onChange={handleChange}
        />
        <label>Password (6 or more characters)</label>
        <input
          type="password"
          id="password"
          placeholder=""
          value={formData.password}
          onChange={handleChange}
        />
        <label>Full name (required if registering)</label>
        <input
          type="text"
          id="fullname"
          onChange={handleChange}
          value={formData.fullname}
          placeholder="enrter name"
        />
        <label>Profile picture URL (optional)</label>
        <input
          type="text"
          id="profilepicture"
          onChange={handleChange}
          value={formData.profilepicture}
          placeholder="image"
        />

     
        <input className="link_button" value={"submit"} type="submit" />
      </form>

      <div className="google_button">
        <span>it you submit your detail click below button</span>
        <Link to="/">
          <button>go to login</button>
        </Link>

       
      </div>
    
    </div>
  );
}

export default Signup;
<script src="./Register.js"></script>;
