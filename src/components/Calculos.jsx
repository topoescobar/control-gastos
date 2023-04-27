import React from 'react'

const Calculos = (_props) => {
  return (
    <>
        <div className='alert alert-primary'>
            Presupuesto: $ {_props.presupuesto}
        </div>
        <div className='alert'>
            Resto: $ {_props.resto}
        </div>
    </>
  )
}

export default Calculos