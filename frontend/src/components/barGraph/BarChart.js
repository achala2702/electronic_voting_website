import React from 'react'
import "./barChart.css"
import {Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend} from "chart.js"
import {Bar} from "react-chartjs-2"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const BarChart = ({candidates}) => {

  //extracting the names and the votecount from the candidats objects
  let names = candidates.map(candidate => candidate.name)
  let votes = candidates.map(candidate => candidate.voteCount)

  const data = {
    labels: names,
    datasets: [{
      label: "No of Votes per Candidates",
      data: votes,
      backgroundColor: "aqua",
      borderColor: "black",
      borderWidth: 1,
    }]
  }

  const options = {
    responsive: true, // makes chart resposive
    maintainAspectRatio: false //turn off the automatic aspect ratio
  }

  return (
    <div id="bar-chart">
      <Bar data = {data}
      options = {options}/>
    </div>
  )
}

export default BarChart