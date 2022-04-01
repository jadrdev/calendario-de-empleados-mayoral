import React, {useContext} from 'react'
import fechas from '../../assets/data/calendar.json'
import { CalendarContex } from '../../context/CalendarContex'
import { getNumberOfMonth } from '../../utils/utils'
import { FINESESEMANA, VACACIONES, DIASELECIONADO, DIANOSELECCIONADO } from '../../utils/contants'
export const EmployeeCaledar = ({ employeeId }) => {
  
  const {state} = useContext(CalendarContex)
  const { mes, vacaciones } = state

  const getBackgroundColor = (employeeId, dayData, dayNumber) => {
    const number = (dayNumber+1).toString().padStart(2, '0');
    const employeeNumber = (employeeId+1).toString().padStart(2, '0');
    const id = number+employeeNumber+mes;

    const VacacionesSeleciondas = {
      id,
    }
    const isActive = vacaciones.filter((vacaciones) => vacaciones.id === VacacionesSeleciondas.id).length;
    if (isActive) return DIASELECIONADO;
    if (dayData.tipoId === 'S') return FINESESEMANA;
    if (dayData.tipoId === 'F') return VACACIONES;
    return DIANOSELECCIONADO;
  }

  
   return (
    <div className='calendario-vacaciones-content'>
      {fechas.datos
        .filter((day) => day.fecha.toString().includes(`2021${getNumberOfMonth(mes)}`))
        .map((day, dayId) => (
        <button
          key={dayId}
          className="calendario-vacaciones-button"
          disabled={day.tipoId !== ''}
          style={{ backgroundColor: `${getBackgroundColor(employeeId, day, dayId)}` }}
        />
      ))}
    </div>
  )
}

