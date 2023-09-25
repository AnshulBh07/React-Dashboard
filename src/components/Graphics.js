import { BiBell } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./graphicsStyles.css";
import StatusCards from "./StatusCards";
import BarGraph from "./BarGraph";
import PieChart from "./PieChart";
import ProfileBox from "./ProfileBox";
import { useAuth0 } from "@auth0/auth0-react";

const Graphics = (props) => {
  const { user, logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  isAuthenticated && console.log(user.picture);

  return (
    <div className="container-graphics">
      <div className="user-options">
        <h2>Dashboard</h2>
        <div className="options">
          <div className="search-bar">
            <input type="text" placeholder="Search.." />
            <button>
              <BsSearch />
            </button>
          </div>
          <div className="profile-info">
            <BiBell className="icons" />
            {!isAuthenticated && <FaUserCircle className="icons" />}
            {isAuthenticated && (
              <button
                onClick={() => {
                  logout();
                }}
                className="profile-picture"
              >
                <img src={user.picture} alt={user.name} />
              </button>
            )}
          </div>
        </div>
      </div>
      <StatusCards statusCardData={props.statusCardData} />
      <BarGraph data={props.graphData} />
      <div className="graphics-bottom">
        <PieChart data={props.StatusCards} />
        <ProfileBox
          setModal={props.setModal}
          displayCard={props.displayCard}
          userData={props.userData}
        />
      </div>
    </div>
  );
};
export default Graphics;
