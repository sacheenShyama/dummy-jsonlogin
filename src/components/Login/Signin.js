import React, { useEffect, useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {  useNavigate } from 'react-router-dom';

function Signin() {
    const navigate=useNavigate()
    let dusraPage=false;

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(userName, userPassword);
    fetchUser();
  };

  const fetchUser = async () => {
    const res = await axios.get(
      `https://pehlapehla.herokuapp.com/personal/get/${userName}`
    );
    // console.log(res)
    const data1 = await res.data;
console.log(data1)
    console.log(data1.fullname);
    console.log(data1.profilepicture);
    console.log(data1.email);
if(userName===data1.fullname&&userPassword===data1.password){
dusraPage=true;
}else{
    dusraPage=false;
}

if(dusraPage){
  navigate("/")
alert("credential  match happy")

}else{
    alert("credential doesn't match")
}

  };



  useEffect(() => {
    // fetchUser();
  }, [userName]);

  return (
    <div className="login">
     
      <h1>Welcome Back</h1>
    
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="name"
          id="name"
          placeholder="enter name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Password (6 or more characters)</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        {/* <Link to=""> */}
          <input className="link_button" value={"submit"} type="submit" />
        {/* </Link> */}
      </form>
   <h4> if name and password mathch you will redirect to main page</h4>
    </div>
  );
}

export default Signin;
