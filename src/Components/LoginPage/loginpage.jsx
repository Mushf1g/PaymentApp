import React, { useState } from "react";
import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://payments.ingress.academy/users2/auth/sign-in/",
        {
          username,
          password,
        }
      );

      
      localStorage.setItem("token",res.data.jwt)
      navigate("/students");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="loginpage">
        <h1 className="loginpageTitle">Ingress Academy</h1>
        <form onSubmit={formSubmitHandler} className="loginpageForm">
          <span>Panelə daxil olun</span>
          <p>Username</p>
          <input
            className="loginpageInput"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
          />
          <p>Parol</p>
          <input
            className="loginpageInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <div className="loginpageCheck">
            <input type="checkbox" />
            <p>Parolu göstər</p>
          </div>
          <button className="loginpageBtn">Daxil ol</button>
        </form>
        <div class="slide-1"></div>
        <div class="slide-2"></div>
        <div class="slide-3"></div>
        <div class="slide-4"></div>
      </section>
    </>
  );
}

export default Loginpage;
