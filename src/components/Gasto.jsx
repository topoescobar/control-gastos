import React from 'react'
import PropTypes from 'prop-types';


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

Gasto.propTypes = {
  Gasto: PropTypes.object
}

export default Gasto