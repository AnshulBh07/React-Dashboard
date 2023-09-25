import "./pieChartStyles.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  const data = {
    labels: [
      "Total Hospitalised",
      "Total Death",
      "Total Positive",
      "Total Negative",
    ],
    datasets: [
      {
        label: "Covid cases",
        data: [1, 6, 7, 8],
        backgroundColor: ["#DEBF85", "#ECA4A4", "#A9B0E5", "#7FCD93"],
      },
    ],
  };
  const options = {
    resposive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        align: "end",
      },
    },
  };

  return (
    <div className="container-pieChart">
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
};
export default PieChart;
