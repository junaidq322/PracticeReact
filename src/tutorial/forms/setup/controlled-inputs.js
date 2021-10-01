import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstname,setFirstName]=useState("");
    const [email,setEmail]=useState("");
    const [people,setPeople]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstname && email){
            const person={id: new Date().getTime(), firstname: firstname,email: email}
            setPeople((people)=>{
                return [...people,person]
            });
            setFirstName('');
            setEmail('');
        }else{
            console.log('Empty Values');
        }
        console.log("Hello World");
    }
  return (
  <>
  <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="firstname">Name: </label>
            <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Email: </label>
            <input type="text" id="firstname" name="firstname" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button type="submit">Add Person</button>
      </form>
      {
          people.map((person)=>{
              const {id,firstname,email}=person;
              return <div className="item" key={id}>
                  <h4>{firstname}</h4>
                  <p>{email}</p>
              </div>
          })
      }
  </article>
  </>
  );
};

export default ControlledInputs;