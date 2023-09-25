import "./profileCardStyles.css";
import { BsInstagram, BsWhatsapp, BsYoutube, BsEnvelope } from "react-icons/bs";

const ProfileCard = (props) => {
  return (
    <div className="profile-card-container">
      <h2>{props.userData.name}</h2>
      <button className="Whatsapp">
        <div className="icon-div wa">
          <BsWhatsapp />
        </div>
        <p>+91 78654 65278</p>
      </button>
      <button className="Instagram">
        <div className="icon-div ig">
          <BsInstagram />
        </div>
        <p>{props.userData.instaLink}</p>
      </button>
      <button className="Email">
        <div className="icon-div em">
          <BsEnvelope />
        </div>
        <p>{props.userData.email}</p>
      </button>
      <button className="Youtube">
        <div className="icon-div yt">
          <BsYoutube />
        </div>
        <p>{props.userData.youtubeLink}</p>
      </button>
    </div>
  );
};
export default ProfileCard;
