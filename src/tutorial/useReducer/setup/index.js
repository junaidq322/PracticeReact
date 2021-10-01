import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import {reducer} from './reducer';
const defaultState={
    people:[],
    isModalOpen:false,
    modalContent:''
}
const Index = () => {
    const [people,setPeople]=useState(data);
    const [name,setName]=useState('');
    const [state,dispatch]=useReducer(reducer,defaultState);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
          const newItem={id:new Date().getTime().toString(),name}
            dispatch({type: 'Add_Item',payload: newItem});
            setName('');
        }
        else{
            dispatch({type: 'No_Value'})
        }
    }
    const closeModal=()=>{
      dispatch({type: 'Close_Modal'})
    }
  return (
      <>
      {state.isModalOpen&&<Modal closeModal={closeModal} modalContent={state.modalContent}/>}
      <form onSubmit={handleSubmit} className="form">
          <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
          <button type="submit">Add</button>
      </form>
      {state.people.map((person)=>{
          return <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button  onClick={()=>dispatch({type:"Remove_Item",payload: person.id})}>Remove</button>
          </div>
      })}
      </>
  );
};

export default Index;