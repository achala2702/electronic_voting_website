import React from 'react';
import "./body.css";
import BarChart from '../../components/barGraph/BarChart';
import PieChart from '../../components/pieChart/PieChart';
import CandidateCon from '../../components/candidateCon/CandidateCon';
import io from "socket.io-client";

//connecting to the server
const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log(`conected to the server ${socket.connected}`);
});

const Body = () => {
  return (
    <div>
      <div id="chart-container">
        <BarChart/>
        <PieChart/>
      </div>
      <CandidateCon/>
    </div>
  )
}

export default Body