import { Link } from "react-router-dom";
import "./formStyles.css";

const LoginForm = () => {
  return (
    <div className="login-card-container">
      <div className="card">
        <div className="inputs">
          <p>Email address</p>
          <input type="text" placeholder="Enter email" />
        </div>
        <div className="inputs">
          <p>Password</p>
          <input type="password" placeholder="Enter password" />
        </div>
        <Link to={"#"}>Forgot Password ?</Link>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default LoginForm;
