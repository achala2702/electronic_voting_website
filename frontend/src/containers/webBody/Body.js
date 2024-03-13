import React, {useEffect, useState} from 'react';
import "./body.css";
import BarChart from '../../components/barGraph/BarChart';
import PieChart from '../../components/pieChart/PieChart';
import CandidateCon from '../../components/candidateCon/CandidateCon';
import io from "socket.io-client";

const Body = () => {

  const [candidatesArr, setCandidates] = useState([]);
  
  useEffect(() => {

    //connecting to the server
    const socket = io("http://localhost:5000");

    //getting the candidates data from the server
    socket.on("candidatesData", (candidates) => {
      setCandidates(candidates);
    });

    //eventlistner for disconnect event
    socket.on("disconnect", ()=> {
      console.log("Disconnected from server!")
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <div id="chart-container">
        <BarChart candidates = {candidatesArr}/>
        <PieChart candidates = {candidatesArr}/>
      </div>
      <CandidateCon/>
    </div>
  )
}

export default Body