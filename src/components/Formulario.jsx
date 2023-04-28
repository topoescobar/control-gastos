import React, { useState } from 'react'
import Error from './Error'
import shortid from 'shortid'

const Formulario = (_props) => {

    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [formError, setFormError] = useState(false)
    /*   funciona con state pero se va pasando atrassado a App
     const [gastoObj, setGastoObj] = useState({
           id: '',
           nomGasto:'',
           cant: ''
       }) */


    let agregarGasto = e => {
        e.preventDefault()

        //validar
        if (isNaN(cantidad) || cantidad < 0 || nombreGasto == '') {
            setFormError(true)
            return
        }

        //construir el Gasto (obj)
        const gastoObj = {
            id: shortid.generate(),
            nomGasto: nombreGasto.trim(),
            cant: cantidad
        }
        setFormError(false)

        //pasar el gasto al comp ppal 
        _props.setGastoX(gastoObj)
        //cuando setea el gasto creado a true se ejecuta useEffect
        _props.setGastoCreado(true)

        //resetear el form
        setNombreGasto('')
        setCantidad(0)
    }

    return (
        <form onSubmit={agregarGasto}>
            <h2> Agregar gastos </h2>
            <div className='campo'>
                <label> Nombre del gasto
                    <input type='text'
                        className='u-full-width'
                        placeholder='Ej.transporte'
                        value={nombreGasto}
                        onChange={e => setNombreGasto(e.target.value)}
                    />
                </label>
            </div>
            <div className='campo'>
                <label> Cantidad $
                    <input type='number'
                        className='u-full-width'
                        placeholder='Ej.300'
                        value={cantidad}
                        onChange={e => setCantidad(parseInt(e.target.value))}
                    />
                </label>
            </div>

            <input type='submit'
                className='button-primary u-full-width'
                value='Agregar gasto'
            />

            {formError ?
                <Error mensaje='error en el ingreso de datos'></Error> :
                null}

        </form>
    )
}

export default Formulario