import React, { useState } from 'react';

function Calculadorabotoes(){
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleClick = (value) => {
      setInput(input + value);
    };
  
    const handleClear = () => {
      setInput('');
      setResult('');
    };
  
    const handleCalculate = () => {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
      } catch (error) {
        setResult('Algo deu errado!');
      }
    };
  
    return (
      <div className='calculadorabotoes'>
        <h2>E essa é minha calculadora com botoes</h2>
        <div>
          <input className='imput' type="text" value={input} readOnly /> 
          <div>{result && <h3>Resultado: {result}</h3>}</div>
        </div>
        <br/>
        <div>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
        </div>
        <div>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
        </div>
        <div>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
        </div>
        <div>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    );
  };
  
  export default Calculadorabotoes;