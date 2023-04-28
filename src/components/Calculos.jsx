import React from 'react'
import {revisarPresupuesto} from '../helpers'

const Calculos = (_props) => {
  return (
    <>
        <div className='alert alert-primary'>
            Presupuesto: $ {_props.presupuesto}
        </div>
        <div className={revisarPresupuesto(_props.presupuesto, _props.resto)}>
            Resto: $ {_props.resto}
        </div>
    </>
  )
}

export default Calculos