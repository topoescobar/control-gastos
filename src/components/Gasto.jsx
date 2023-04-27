import React from 'react'

const Gasto = ({objGasto}) => {
  return (
    <li className='gastos'>
        <p>
            {objGasto.nomGasto}
            <span className='gasto'> ${objGasto.cant} </span>
        </p>
    </li>
  )
}

export default Gasto