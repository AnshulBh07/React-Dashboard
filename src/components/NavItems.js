import { FiPieChart } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";

const navItems = [
  { key: 1, text: "Dashboard", icon: <FiPieChart className="icons" /> },
  { key: 2, text: "Transactions", icon: <BsTags className="icons" /> },
  { key: 3, text: "Schedules", icon: <AiOutlineSchedule className="icons" /> },
  { key: 4, text: "Users", icon: <BiUserCircle className="icons" /> },
  { key: 5, text: "Settings", icon: <FiSettings className="icons" /> },
];
export default navItems;
