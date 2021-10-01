import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const UnControlledInputs = () => {
    //const [firstname,setFirstName]=useState("");
    //const [email,setEmail]=useState("");
    const [people,setPeople]=useState([]);
    //const [age,setAge]=useState('');
    const [person,setPerson]=useState({firstname: '',email: '', age: ''});
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPerson({...person,[name]:value})
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(person.firstname && person.firstname && person.age){
            const newPerson={...person,id: new Date().getTime().toString()}
            setPeople([...people,newPerson]);
            setPerson({firstname:'',email:'',age:''})
        }
       
    }
    
  return (
  <>
  <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="firstname">Name: </label>
            <input type="text" id="firstname" name="firstname" value={person.firstname} onChange={handleChange}/>
        </div>
        <div className="form-control">
            <label>Email: </label>
            <input type="text" id="firstname" name="email" value={person.email} onChange={handleChange}/>
        </div>
        <div className="form-control">
            <label>Age: </label>
            <input type="text" id="age" name="age" value={person.age} onChange={handleChange}/>
        </div>
        <button type="submit" onClick={handleSubmit}>Add Person</button>
      </form>
      {
          people.map((person)=>{
              const {id,firstname,age,email}=person;
              return <div className="item" key={id}>
                  <h4>{firstname}</h4>
                  <p>{age}</p>
                  <p>{email}</p>
              </div>
          })
      }
  </article>
  </>
  );
};

export default UnControlledInputs;