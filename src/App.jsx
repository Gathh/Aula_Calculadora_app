import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculadora from './components/Calculadora'
import Mensagem from './components/Mensagem'
import Calculadorabotoes from './components/Calculadorabotoes'

function App() {

  return (
    <>
    <div className='Box1'>
      <Mensagem/>
      <Calculadora/>
      <Calculadorabotoes/>
    </div>
    </>
  )
}

export default App
