import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PresupuestoComp from './components/PresupuestoComp'
import Formulario from './components/Formulario'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [presupuestoDefinido, setPresupuestoDefinido] = useState(false)
  const [resto, setResto] = useState(0)
  const [gastoArr, setGastoArr] = useState([])

  let agregarGasto = (gasto) => {
    setGastoArr([...gastoArr, gasto])

  }

  return (
    <>
      <div className='container'>
        <h1>Gasto semanal</h1>

        {!presupuestoDefinido ? (
          <div className='contenido-principal'>
            <PresupuestoComp
              setPresupuesto={setPresupuesto}
              setResto={setResto}
              setPresupuestoDefinido={setPresupuestoDefinido}
            ></PresupuestoComp>
          </div>
        ) : (
          <div className='row'>
            <div className='one-half column'>
              <Formulario
                agregarGasto={agregarGasto}
              ></Formulario>
            </div>
            <div className='one-half column'>
              2
            </div>
          </div>
        )}


      </div>

    </>
  )
}

export default App
