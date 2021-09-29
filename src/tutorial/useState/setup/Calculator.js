import React, { useState } from 'react'

const Calculator = () => {
    const [val1,setVal1]=useState(0);
    const [val2,setVal2]=useState(0);
    const [result,setResult]=useState(0);
    return (
        <div>
            <section style={{margin: '4rem 0'}}>
            <h2>Calculator</h2>
            <h1>{result}</h1>

            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">/</button>
            <br></br>

            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">*</button><br></br>

            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">+</button><br></br>

        </section>
        </div>
    )
}
export default Calculator;