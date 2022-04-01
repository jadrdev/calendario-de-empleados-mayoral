import React from 'react'
import '../../styles/calendar.css'
import { ListEmployees } from '../employess/ListEmployees'
import { ListFechas } from './ListFechas'
import empleados from '../../assets/data/employees.json'
import { EmployeeCaledar } from '../employess/EmployeeCaledar'

export const Calendar = () => {
  
  return (
    <>
      <div className='calendario'>
        <ListFechas />
        {empleados.data
        .map((employee, employeeId) => (
          <div key={employeeId} className="calendario-employees-content">
            <ListEmployees employee={employee} employeeId={employeeId} />
            <EmployeeCaledar employeeId={employeeId} />
          </div>
        ))}
      </div>
    </>
  )
}
