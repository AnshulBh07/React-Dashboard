import "./profileBoxStyles.css";
import { BsPlusCircleFill } from "react-icons/bs";
import ProfileCard from "./ProfileCard";

const ProfileBox = (props) => {
  return (
    <div className="container-profilebox">
      {!props.displayCard && (
        <button
          className="container-profile-btn"
          onClick={() => props.setModal(true)}
        >
          <div className="sub-container">
            <BsPlusCircleFill className="plus-icon"></BsPlusCircleFill>
            <p>Add profile</p>
          </div>
        </button>
      )}

      {props.displayCard && <ProfileCard userData={props.userData} />}
    </div>
  );
};
export default ProfileBox;
