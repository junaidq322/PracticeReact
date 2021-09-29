import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title,setTitle]=useState("Random Title");
  const handleClick=()=>{
      if(title=="Random Title"){
        setTitle("Changed Title");
      }
      else{
          setTitle("Random Title");
      }
    
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change title</button>
  </React.Fragment>
};

export default UseStateBasics;