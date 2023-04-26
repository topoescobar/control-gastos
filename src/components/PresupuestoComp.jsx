import React, { useState } from 'react'
import Error from './Error'

const PresupuestoComp = ({setPresupuesto, setResto, setPresupuestoDefinido}) => {

    const [cantidad, setCantidad] = useState(0.0)
    const [error, setError] = useState(false)

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value))
    }

    const agregarPresupuesto = e => {
        e.preventDefault()

        //validacion
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        }
        setError(false)

        setPresupuesto(cantidad)
        setResto(cantidad)
        setPresupuestoDefinido(true)

    }

  return (
    <>
    <h2>Ingresar presupuesto</h2>
    <form onSubmit={agregarPresupuesto}>
        <input type='number' 
        className='u-full-width' 
        placeholder='Ingresar tu presupuesto' 
        onChange={definirPresupuesto}
         />

        <input type='submit' 
        className='button-primary u-full-width' 
        value='Establecer presupuesto'
         />
    </form>
    {error ? <Error mensaje='numero ingresado no válido'></Error> : null }

    </>
  )
}

export default PresupuestoComp