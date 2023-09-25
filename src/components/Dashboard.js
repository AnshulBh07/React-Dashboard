import { useEffect, useState } from "react";
import Graphics from "./Graphics";
import Modal from "./Modal";
import Navigation from "./Navigation";
import "./dashboardStyles.css";
import getCovidData from "../dataService";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  // creating a user object which will populate profile card
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    instaLink: "",
    youtubeLink: "",
  });

  const [profileCard, setProfileCard] = useState(false);
  const [data, setData] = useState([]);
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getCovidData();
      console.log(res);

      setData(res);

      const array = [];
      var totalPositive = 0,
        totalNegative = 0,
        totalHospitalised = 0,
        totalDeath = 0,
        total = 0;

      for (var i = 0; i < res.length; i++) {
        totalPositive += res[i].positive;
        totalNegative += res[i].negative;
        totalHospitalised += res[i].hospitalized;
        totalDeath += res[i].death;
      }

      total = totalHospitalised + totalDeath + totalPositive + totalNegative;

      array.push(totalPositive);
      array.push(totalNegative);
      array.push(totalDeath);
      array.push(totalHospitalised);
      array.push(total);

      console.log(array);

      setStatsData(array);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="board">
        <Navigation />
        <Graphics
          setModal={setOpenModal}
          userData={user}
          displayCard={profileCard}
          graphData={data}
          statusCardData={statsData}
        />
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          user={user}
          setUser={setUser}
          setCard={setProfileCard}
        />
      )}
    </div>
  );
};
export default Dashboard;
