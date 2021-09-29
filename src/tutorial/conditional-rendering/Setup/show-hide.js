import React, { useState, useEffect } from 'react';

const ShowHide = () => {
    const [show,setShow]=useState(false);
  return (
      <>
        <button className="btn" onClick={()=>setShow(!show)}>
            Show/Hide
            </button>  
            {show ? (
                <div>
                    <p>Show the music</p>
                </div>
            ):(
                <div>
                    <p>Don't Show the music</p>
                </div>
            )}  

            {show && <Item />}
      </>
  );
};

const Item=()=>{
    const [size,setSize]=useState(window.innerWidth);
    const checkSize=()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=>{
            window.removeEventListener('resize',checkSize);
        };
    },[]);

    return (
        <div style={{marginTop: '2rem'}}>
            <h1>Window</h1>
            <h1>Size: {size}</h1>
        </div>
    )
}

export default ShowHide;