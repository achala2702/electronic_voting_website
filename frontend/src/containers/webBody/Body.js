import React from 'react'
import "./body.css"
import BarChart from '../../components/barGraph/BarChart'
import PieChart from '../../components/pieChart/PieChart'
import CandidateCon from '../../components/candidateCon/CandidateCon'

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