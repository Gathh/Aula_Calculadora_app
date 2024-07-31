import React, { useState } from 'react';

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState('');

  return (
    <>
    <h2>Olá essa é minha calculadora sem botões!</h2>
    <input className='imput'
        type='number'
        value={num1}
        onChange={
            (event) => setNum1(parseFloat(event.target.value))
        }
      />
    <input className='imput'
        type='number'
        value={num2}
        onChange={
            (event) => setNum2(parseFloat(event.target.value))
        }
      />
      
      <div className='botoes'>
      <button onClick={() => setResultado(num1 + num2)}>+</button>
      <button onClick={() => setResultado(num1 - num2)}>-</button>
      <button onClick={() => setResultado(num1 * num2)}>*</button>
      <button onClick={() => setResultado(num1 / num2)}>/</button>
      </div>
      <p>{resultado}</p>
    </>
  );}

export default Calculadora;