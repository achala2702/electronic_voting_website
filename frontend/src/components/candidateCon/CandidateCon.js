import React from 'react'
import "./candidateCon.css"
import image from "../assets/Person.png"

const CandidateCon = ({candidates}) => {

  //rendering div tags for each candidate object
  let renderDivs = () => {
    return candidates.map((candidate, index) => (
      <div className='candidate-container' key = {index}>
        <img className='candidate-img' src= {image} alt= {candidate.name}/>
        <p className='candidate-name'>{candidate.name}</p>
        <p className='candidate-voteCount'>{candidate.voteCount}</p>
      </div>
    ));
  };

  return (
    <div id="candi-container">
      {renderDivs()}
    </div>
  )
}

export default CandidateCon