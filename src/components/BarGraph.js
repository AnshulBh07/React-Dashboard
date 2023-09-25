import "./barGraphStyles.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = (props) => {
  const barData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    datasets: [
      {
        label: "Negative Increase",
        data: props.data.map((x) => x.negativeIncrease),
        backgroundColor: "#7FCD93",
      },
      {
        label: "Positive Increase",
        data: props.data.map((x) => x.positiveIncrease),
        backgroundColor: "#ECA4A4",
      },
    ],
  };
  const options = {
    resposive: false,
    maintainAspectRatio: false,
    scale: {
      y: {
        max: 300000,
        min: 0,
        ticks: {
          stepSize: 30000,
        },
      },
    },
    plugins: {
      legend: {
        align: "end",
        font: {
          size: 1,
        },
      },
    },
  };

  return (
    <div className="container-barGraph">
      <div className="heading">
        <p>Increase and decrease in cases for past 6 days</p>
      </div>
      <div className="graph">
        <Bar data={barData} options={options} className="diagram"></Bar>
      </div>
    </div>
  );
};
export default BarGraph;
