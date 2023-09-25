import "./signInStyles.css";
import IconApple from "../assets/images/icons/apple.svg";
import IconGoogle from "../assets/images/icons/google.svg";
import LoginForm from "./LoginForm";
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SignInPage = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  console.log(user);
  console.log(isAuthenticated);

  return (
    <div className="signIn-container">
      <div className="first-half">
        <div className="bg"></div>
        <div className="content-container">
          <p>LOGO</p>
          <h1>Board.</h1>
          <div className="icons-container">
            <FaGithub className="icons" />
            <FaTwitter className="icons" />
            <FaLinkedin className="icons" />
            <FaDiscord className="icons" />
          </div>
        </div>
      </div>
      <div className="second-half">
        <div className="logIn-flex">
          <div className="title">
            <h1>Sign In</h1>
            <p>Sign into your account</p>
          </div>
          <div className="signIn-buttons">
            <button
              className="btns"
              onClick={(e) => {
                loginWithRedirect();
              }}
            >
              <span>
                <img
                  src={`${IconGoogle}`}
                  alt="google icon"
                  className="icons"
                />
              </span>
              Sign in with Google
            </button>
            <button className="btns">
              <span>
                <img src={`${IconApple}`} alt="apple icon" className="icons" />
              </span>
              Sign in with Apple
            </button>
          </div>
          <LoginForm />
          <p>
            Don't have an account?{" "}
            <span>
              <Link to={"/dashboard"} className="register-link">
                Register Here
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
