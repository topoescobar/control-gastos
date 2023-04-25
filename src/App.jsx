import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [resto, setResto] = useState(0)
  return (
    <>
      <div className="container">
        <h1>Gasto semanal</h1>

        <div className="contenido-principal">
          <Pregunta
            setPresupuesto={setPresupuesto}
            setResto={setResto}
          ></Pregunta>

        </div>

        <div className="row">
            <div className="one-half column">
              <Formulario></Formulario>
              
            </div>
            <div className="one-half column">
              2
            </div>
          </div>

      </div>

    </>
  )
}

export default App
