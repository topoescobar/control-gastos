import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pregunta from './components/Pregunta'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [resto, setResto ] = useState(0)
  return (
    <>
      <div className="container">
        <h1>Gasto semanal</h1>

        <div className="contenido-principal">
          <Pregunta
          setPresupuesto = {setPresupuesto}
          setResto = {setResto}
          ></Pregunta>
 
        </div>

      </div>

    </>
  )
}

export default App
