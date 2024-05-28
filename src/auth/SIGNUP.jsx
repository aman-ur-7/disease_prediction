import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SIGNUP = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function refreshPage() {
    window.location.reload(true);
  }

  const SIGNUP_PAGE = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      alert("fields are menditory");
    }

    try {
      const signupResponse = await axios.post(
        "http://localhost:7001/user/register",
        { email, password, name }
      );
      if (signupResponse) {
        navigate("/login");
      }
    } catch (error) {
      alert("There is a chace you are using same email");
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
        <form action="" onSubmit={SIGNUP_PAGE} className="login_form">
          <div>
            <input
              className="input"
              type="text"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
            />
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
          <div className="login_insider">
            <button
              type="sbumit"
              className="login_button"
              style={{
                width: "100px",
                display: "flex",
                justifyContent: "center",
                justifySelf: "center",
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SIGNUP;
