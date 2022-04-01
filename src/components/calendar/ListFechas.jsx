import React, { useContext } from 'react'
import fechas from '../../assets/data/calendar.json'
import { CalendarContex } from '../../context/CalendarContex';
import { getNumberOfMonth } from '../../utils/utils'

export const ListFechas = () => {

  const {state} = useContext(CalendarContex)
  const {mes} = state


  return (
    <div className="calendario-header">
       <div className='calendario-header-content'>
        <b className='employee-name'>Listado de empleados</b>
      </div>
      <div className='calendario-header-days'>
      {fechas.datos
            .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth(mes)}`))
            .map((day) => (
            <p
              key={day.fecha}
              className="calendario-header-days-content"
            >{(day.fecha).toString().slice(-2)}</p>
            ))} 
        </div>
    </div>
  )
}
