import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value,setValue]=useState(0);
    const [compvalue,setCompValue]=useState(0);
    const incrementHandler=()=>{
        setValue(value+1);
    }
    const decrementHandler=()=>{
        setValue(value-1);
    }
    const compIncrementHandler=()=>{
        setTimeout(()=>{
            setCompValue((prevState)=>{
                 return prevState+1;
             });
        },1000)
    }
    const compDecrementHandler=()=>{
        setTimeout(()=>{
             setCompValue((prevState)=>{
                 return prevState-1;
             });
        },1000)
    }
    const reset=()=>{
        setValue(0);
        setCompValue(0);
    }
  return <>
        <section style={{margin: '4rem 0'}}>
            <h2>Regular Counter</h2>
            <h1>{value}</h1>

            <button className="btn" onClick={()=>incrementHandler()}>Increment</button>
            <button className="btn" onClick={()=>reset()}>Reset</button>
            <button className="btn" onClick={()=>decrementHandler()}>Decrement</button>

        </section>
        <section>
            <h2>Complex Counter</h2>
            <h1>{compvalue}</h1>
             <button className="btn" onClick={()=>compIncrementHandler()}>Increment</button>
            <button className="btn" onClick={()=>reset()}>Reset</button>
            <button className="btn" onClick={()=>compDecrementHandler()}>Decrement</button>
        </section>
  </>
};

export default UseStateCounter;