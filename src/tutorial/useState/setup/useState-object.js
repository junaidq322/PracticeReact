import React, { useState } from 'react';

const UseStateObject = () => {
    const [person,setPerson]=React.useState({
        name:'Peter',
        age: 24,
        message: 'Random Message'
    })
    const changePerson=()=>{
        if(person.message==="Random Message")
        {
            setPerson({...person,message:"Hey buddy"})
        }
        else{
            setPerson({...person,message:"Random Message"})
        }
        
    }
  return (
    <>
    <h2>{person.name}</h2>
     <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={()=>changePerson()}>Change Message</button>
    </>

    );
};

export default UseStateObject;