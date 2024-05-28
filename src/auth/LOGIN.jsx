import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LOGIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(true);
  }

  const LOGIN_PAGE = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("fields are menditory");
    }

    try {
      const loginResponse = await axios.post(
        "http://localhost:7001/user/login",
        { email, password }
      );
      if (loginResponse) {
        navigate("/patient");
      }
    } catch (error) {
      alert("Your email and password is incorrect");
      setTimeout(() => {
        refreshPage();
      }, 2000);
    }
  };
  return (
    <main className="login_page">
      <div className="contain">
        <div>
          <h1>Welcome!</h1>
          <p>Sign in to continue.</p>
        </div>
        <form action="" onSubmit={LOGIN_PAGE} className="login_form">
          <div>
            <input
              className="input"
              type="email"
              placeholder="user@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="User@123"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login_insider" style={{ display: "flex" }}>
            <button type="sbumit" className="login_button">
              Log in
            </button>
            <span
              style={{ color: "#1471c9", cursor: "pointer" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Register ?
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LOGIN;
