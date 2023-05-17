import React from 'react'
import Gasto from './Gasto'
import PropTypes from 'prop-types';

const ListadoGastos = (_props) => {
  return (
    <div className='gastos-realizados'>
      <h2>Listado</h2>
      {_props.gastosArr.map(gasto_i => 
          <Gasto
            key={gasto_i.id}
            objGasto = {gasto_i}
          ></Gasto>
        )}
    </div>
  )
}

ListadoGastos.propTypes = {
  gastosArr: PropTypes.array.isRequired
}

export default ListadoGastos