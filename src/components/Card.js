import "./cardStyles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="header-container">
        <div
          className="card-icon"
          style={{ backgroundColor: `${props.bgColor}` }}
        >
          {props.icon}
        </div>
        <p className="header-text">{props.text}</p>
      </div>

      <p className="value">{props.stats}</p>
    </div>
  );
};
export default Card;
