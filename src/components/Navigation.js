import { Link } from "react-router-dom";
import "./navigationStyles.css";
import navItems from "./NavItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="container-navbar">
      <div className="navbar-header">
        <div className="navbar-logo">
          <h1>Board.</h1>
        </div>
        <ul className={navbar ? "nav-links navbar-active" : "nav-links"}>
          {navItems.map((item) => {
            return (
              <li>
                <div className="link">
                  {item.icon}
                  <Link to={"#"}>{item.text}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navbar-footers">
        <Link to={"#"}>Help</Link>
        <Link to={"#"}>Contact Us.</Link>
      </div>

      <div className="hamburger-container">
        {!navbar && (
          <button
            className="hamburger-button open"
            onClick={() => setNavbar(true)}
          >
            <RxHamburgerMenu className="icon" />
          </button>
        )}
        {navbar && (
          <button
            className="hamburger-button close"
            onClick={() => setNavbar(false)}
          >
            <VscChromeClose className="icon" />
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
