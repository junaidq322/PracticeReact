import React from 'react';
import {data} from '../../../data';
const UseStateArray = () => {
    const [people,setPeople]=React.useState(data);
    const removeItem=(id)=>{
        let newPeople=people.filter((person)=>person.id!==id);
        setPeople(newPeople);
    }
    const addItem=(id)=>{
        let newPeople=people.filter((person)=>person.id!==id);
        setPeople(newPeople);
    }
  return(
  <>
  {
      people.map((p)=>{
          const {id,name}=p;
          console.log(name);
          return (
          <div key={id} className="item">
              <h2>{name}</h2>
              <button className="btn" onClick={()=>removeItem(id)}>Remove Item </button>
          </div>
          )
      })
  }
  <button className="btn" onClick={()=>setPeople([])}>
    Clear Items
  </button>
  </>
  )
};

export default UseStateArray;