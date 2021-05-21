import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
  const operations = ['+', '-', '*', '/']; 
  
  const [ number, setNumber ] = useState('');
  const [ keepedNumber, setKeepedNumber ] = useState('');
  const [ operation, setOperation ] = useState('');
  const [ result, setResult ] = useState('');
  const [ con, setCon ] = useState(true);

  function clickOperation(val) {
    setOperation(val);
    setNumber('');
    setCon(true);
    makeOperation();
    if(!result) {
      setKeepedNumber(number);
    }else {
      setKeepedNumber(result);
    }
  };

  function clickNumbers(val) {
    setNumber(number+val)
  }

  function makeOperation() {
    switch(operation) {
      case "+":
        setResult(Number(keepedNumber) + Number(number));
        break;
        case "-":
          setResult(Number(keepedNumber) - Number(number));
        break
        case "*":
          setResult(Number(keepedNumber) * Number(number));
        break;
        case "/":
          setResult(Number(keepedNumber) / Number(number));
        break;
    }
  }

  return (
    <div className="App">
      <div className="result">{con?keepedNumber+operation+number:result}</div>
      <div className="calculator">
        <div className="left">
          {numbers.map((val, key) => {
              return <div 
              onClick={()=>{clickNumbers(val)}} 
              id="nums">{val}</div>
          })}
          <div onClick={()=>{clickNumbers(0)}}
               className="zero">0</div>
          <div onClick={()=>{
            makeOperation();
            setCon(!con);
          }} 
          className="equal">=</div>
        </div>
        <div className="right">
          {operations.map((val, key) => {
          return <div 
          onClick={()=>{clickOperation(val)}}
          id="operations">{val}</div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
