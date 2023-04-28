import { useState, useEffect } from 'react'
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
  const [gastoXobj, setGastoX ] = useState({})
  const [gastoCreado, setGastoCreado] = useState(false)

  //Calcular el resto
  useEffect(() => {
    if (gastoCreado) {
      setgastosArr([...gastosArr, gastoXobj])
      //restar el gasto al total
      let presupuestoRestante = resto - gastoXobj.cant
      setResto(presupuestoRestante)
      
      //despues de sumado el objeto cortar con gastoCreado
      setGastoCreado(false)
    }
  }, [gastoXobj] )

  let agregarGasto = () => {

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
                // agregarGasto={agregarGasto}
                setGastoX = {setGastoX}
                setGastoCreado = {setGastoCreado}
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
