import axios from "axios";

const getCovidData = async () => {
  const response = await axios.get(
    "https://api.covidtracking.com/v1/us/daily.json"
  );
  var result = response.data;

  //destructuring array of objects here
  const array = [];
  for (var i = 0; i < 6; i++) array.push(result[i]);

  return array;
};

export default getCovidData;
