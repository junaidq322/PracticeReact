export const reducer =(state,action)=>{
  if(action.type==='Add_Item'){
     const newPeople=[...state.people,action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen:true,
      modalContent: 'item added'
    }
   
  }
   if(action.type==="No_Value"){
      return {...state,isModalOpen:true, modalContent: 'Please enter value'}
    }
    if(action.type==="Close_Modal"){
      return {...state,isModalOpen:false}
    }
    if(action.type==="Remove_Item"){
      const newPeople=state.people.filter((person)=>person.id!==action.payload)
      return {...state,people:newPeople}
    }
  throw new Error('No matching action type');
}