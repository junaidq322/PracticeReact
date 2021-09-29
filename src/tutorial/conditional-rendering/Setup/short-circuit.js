import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text,setText]=useState();
    const [isError,setIsError]=useState(true);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
    const toggle=()=>{
        setIsError(false);
    }
  return (
  <>
  <h1>{firstValue}</h1>
  <h1>{secondValue}</h1>
  {isError && (
      <div>
          <button className="btn" onClick={toggle}>Click me</button>
      </div>
  )}
  {isError ? (
      <div>
          <button className="btn" onClick={toggle}>Click me</button>
          <p>Hey, buddy there's an error</p>
      </div>
  ): (
      <div>
          <p>No Error...</p>
      </div>
  )}
  </>
  );
};

export default ShortCircuit;