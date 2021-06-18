import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false) // info toggler

  return <article className="question">
    <header>
      <h4>{title}</h4>
    {showInfo ? 
      <button className="btn" onClick={()=> setShowInfo(!showInfo)}><AiOutlineMinus /></button> 
      : 
      <button className="btn" onClick={()=> setShowInfo(!showInfo)}><AiOutlinePlus /></button> 
    }
    </header>
    <p>{showInfo ? info : ''}</p>    
  </article>
};

export default Question;
