import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PresupuestoComp from './components/PresupuestoComp'
import Formulario from './components/Formulario'
import ListadoGastos from './components/ListadoGastos'
import Calculos from './components/Calculos'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [presupuestoDefinido, setPresupuestoDefinido] = useState(false)
  const [resto, setResto] = useState(0)
  const [gastosArr, setgastosArr] = useState([])

  let agregarGasto = (gasto) => {
    setgastosArr([...gastosArr, gasto])

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
              <ListadoGastos
                gastosArr={gastosArr}
              ></ListadoGastos>
              <Calculos
                presupuesto={presupuesto}
                resto={resto}
              ></Calculos>
            </div>
          </div>
        )}


      </div>

    </>
  )
}

export default App
