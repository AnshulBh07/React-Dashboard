import Card from "./Card";
import "./statusCardsStyles.css";
import { BsHospital } from "react-icons/bs";
import {
  GiDeathSkull,
  GiHealthIncrease,
  GiHealthDecrease,
} from "react-icons/gi";

const StatusCards = (props) => {
  const array = [
    {
      key: 1,
      icon: <GiHealthIncrease className="icon" />,
      text: "Total Positive",
      stats: `${props.statusCardData[0]}`,
      bg: "#A9B0E5",
    },
    {
      key: 2,
      icon: <GiHealthDecrease className="icon" />,
      text: "Total Negative",
      stats: `${props.statusCardData[1]}`,
      bg: "#7FCD93",
    },
    {
      key: 3,
      icon: <BsHospital className="icon" />,
      text: "Hospitalised",
      stats: `${props.statusCardData[3]}`,
      bg: "#DEBF85",
    },
    {
      key: 4,
      icon: <GiDeathSkull className="icon" />,
      text: "Deaths",
      stats: `${props.statusCardData[2]}`,
      bg: "#ECA4A4",
    },
  ];

  return (
    <div className="container-statusCards">
      {array.map((item, index) => {
        return (
          <Card
            key={index}
            icon={item.icon}
            text={item.text}
            stats={item.stats}
            bgColor={item.bg}
          />
        );
      })}
    </div>
  );
};
export default StatusCards;
