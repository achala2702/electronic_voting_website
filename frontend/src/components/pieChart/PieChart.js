import React from 'react';
import "./pieChart.css";
import {Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import {Pie} from "react-chartjs-2";

//registering the components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


const PieChart = () => {

  let castedVotes = 100;
  const totalVotes = 250
  let remainingVotes = totalVotes - castedVotes;

  const data = {
    labels: ["Remaining Votes", "Casted Votes"],
    datasets: [{
      label: "pie chart",
      data: [castedVotes, remainingVotes],
      backgroundColor: ["aqua", "black"],
      borderColor: "black",
      borderWidth: 1,
    }]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

  return (
    <div id="pie-chart">
      <Pie
      data={data}
      options={options}/>
    
    </div>
  )
}

export default PieChart