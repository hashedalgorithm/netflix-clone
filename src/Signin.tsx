import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateAndDispatch } from "./UseStateAndDispatch";
import Footer from "./Footer";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [wrongPass, setWrongPass] = useState(false);
  const { dispatch } = useStateAndDispatch();
  const history = useHistory();
  const handleEmail = (emailadd: string) => {
    setEmail(emailadd);
  };
  const handlePass = (password: string) => {
    setPass(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    //api fetch user details
    if (email === "example@gmail.com") {
      if (pass !== "123456") {
        e.preventDefault();
        setPass("");
        setWrongPass(true)
        alert("email: example@gmail.com password: 123456 wrong password");
        document.getElementById("password")?.focus();
        return;
      } 
      else {
        dispatch({ type: "SET_LOGIN" });
        setWrongPass(false)
        history.push("/home");
      }
    }
    else{
        e.preventDefault();
        setPass("");
        setWrongPass(true);
        alert("email: example@gmail.com password: 123456 wrong password");
        document.getElementById("email")?.focus();
        return;
      }
  };
  return (
    <>
      <div className="section1">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a33204b-893d-4792-8494-b9d6cbc73848/8ed3a98a-e2c2-488d-9583-93634199485d/IN-en-20210502-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
          className="section1_bgimg"
        />
        <div className="topbar">
          <div className="topbar_logo">
            <svg height="400px" width="600px" fill="red">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              />
            </svg>
          </div>
        </div>
        <div className="signin_box">
          <h1 style={{ color: "white", fontSize: "2rem" }}>Signin</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              className="signin_input"
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                handleEmail(e.target.value);
              }}
            />
            <input
              className="signin_input"
              id="password"
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                handlePass(e.target.value);
              }}
            />
            {wrongPass ? (
              <span style={{color: "orange"}}>Invalid email/password</span>
            ) : (
              <></>
            )}
            <br />
            <br />
            <br />
            <button type="submit" className="signin_btn">
              Sign in
            </button>
            <input type="checkbox" />
            <span>Remember me</span>
            <a style={{ right: "0px", left: "100px" }} href="#needhelp">
              Need Help?
            </a>
            <br />
            <br />
            <i className="fab fa-facebook-square"></i>
            <a href="#loginwithfacebook">Login with facebook</a>
            <p>
              New to Netflix?
              <a style={{ color: "white" }} href="#signup">
                Sign Up Now
              </a>
            </p>
            <p>
              This page is procted by Google reCaptcha to ensure you're not a
              bot. <a href="#learnmore">Learn More</a>
            </p>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default Signin;
