import React, {useContext} from 'react'
import { CalendarContex } from '../../context/CalendarContex';
import {getDiasLibres} from '../../utils/utils'
export const ListEmployees = ({ employee, employeeId }) => {
  
  const {state} = useContext(CalendarContex)
  const { diaslibres } = state

  return (
    <div className='calendario-content'>
      <p className='nombredelempleado'>{`${employee?.first_name} ${employee?.last_name}`}</p>
      <div className='diasdevacacciones'>
        <p>
          {
              getDiasLibres(employeeId, diaslibres) ?
              getDiasLibres(employeeId, diaslibres) :
              getDiasLibres(employeeId, diaslibres) === 0 ? 0 : 22
          }
        </p>
        <p>/</p>
        <p>22</p>
      </div>
    </div>

  )
}
