import React, {useContext} from 'react'
import fechas from '../../assets/data/calendar.json'
import { CalendarContex } from '../../context/CalendarContex'
import { getNumberOfMonth } from '../../utils/utils'

export const EmployeeCaledar = ({ employeeId }) => {
  
  const {state} = useContext(CalendarContex)
  const { mes, vacaciones, diaslibres } = state
  
   return (
    <div className='calendar-holidays-content'>
      {fechas.datos
        .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth(mes)}`))
        .map((day, dayId) => (
        <button
          key={dayId}
          className="calendar-holidays-button"
          disabled={day.tipoId !== '' }

        />
      ))}
    </div>
  )
}

