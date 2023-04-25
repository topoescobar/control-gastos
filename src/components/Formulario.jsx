import React from 'react'

const Formulario = () => {
  return (
    <form >
        <h2> Agregar gastos </h2>
        <div className="campo">
            <label> Tipo de gasto
                <input type="text"
                className='u-full-width'
                placeholder='Ej.transporte'
                />
            </label>
        </div>
        <div className="campo">
            <label> Cantidad $
                <input type="number"
                className='u-full-width'
                placeholder='Ej.300'
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