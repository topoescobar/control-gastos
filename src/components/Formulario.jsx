import React, { useState } from 'react'

const Formulario = () => {

    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidad, setCantidad] = useState(0)

    let agregarGasto = e => {
        e.preventDefault()

        //validar

        //construir el gasto (obj)

        //pasar el gasto al comp ppal 

        //resetear el form
    }

  return (
    <form onSubmit={agregarGasto}>
        <h2> Agregar gastos </h2>
        <div className="campo">
            <label> Nombre del gasto
                <input type="text"
                className='u-full-width'
                placeholder='Ej.transporte'
                // value={nombreGasto}
                onChange={ e => setNombreGasto(e.target.value)}
                />
            </label>
        </div>
        <div className="campo">
            <label> Cantidad $
                <input type="number"
                className='u-full-width'
                placeholder='Ej.300'
                value={cantidad}
                onChange={ e => setCantidad(parseInt(e.target.value))}
                />
            </label>
        </div>

        <input type="submit" 
        className='button-primary u-full-width'
        value='Agregar gasto'
         />

    </form>
  )
}

export default Formulario