import logo from "./images/basFooter.svg";
import "./LoginStyle.css";
import logImg from "./images/curnerleft.png";
import logImgMob from "./images/Vector1.svg";

import backIcon from "./images/Layer 2.svg";
import { useState } from "react";


const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setCheck] = useState();
  const [isAdmin, setAdmin] = useState();

  async function userlogIn(){
    console.log({ "email" : email,"password" : password,"remember" : isChecked})
    await fetch("https://back.black-analysis-solutions.com/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ "email" : email,"password" : password,"remember" : isChecked}),
      })
        .then((res) => res.json())
        .then((res) => {
    console.log(res)
/*     tokennn = res.access_token;
    adminn = res.user.is_admin;
    userid =res.user.id; */
        })
/*     localStorage.setItem("accessToken" , tokennn);
    localStorage.setItem("isAdmin" , adminn );
    if(adminn == 1  ){
      window.location.href = `http://localhost:3000/BAS/admin/${userid}`
    }
    if(adminn == 0 ){
      window.location.href = `http://localhost:3000/BAS/user/${userid}`
    } */
    }


  const handleClick = (event) => {

  };

  const kk = () => {
    console.log("ee");
  };

  return (
    <>
      <div className="loginContainer ">
        <img src={backIcon} className="backIcon" onClick={handleClick} />

        <div className="logCard">
          <img src={logo} />
          <h5>LOGIN</h5>
          <span>Welcome back.</span>

            <div className="loginTop">
              <input
                type="email"
                placeholder="Username"
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="loginBottom">
              <label className="containerr">
                <p>Remember me</p>
                <input
                  type="checkbox"
                  onChange={(event) => setCheck(event.target.checked)}
                />
                <span className="checkmark"></span>
              </label>

              <div className="loginBtn">
                <button type="submit" onClick={userlogIn}>Log in</button>
                <a onClick={kk} className="text-white">
                  Forget Password ?
                </a>
              </div>
            </div>

          <span>
            Don’t have an account ?
            {/* <HashLink to={"/#contactUs"}>Contact us</HashLink> */}
          </span>
        </div>
        <img src={logImg} className="imgDown d-flex " />
        <img src={logImgMob} className="d-none imgDownMob" />
      </div>
    </>
  );
};

export default LogIn;
