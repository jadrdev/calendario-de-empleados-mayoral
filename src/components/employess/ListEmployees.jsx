import React from 'react'
export const ListEmployees = ({employee, employeeId}) => {

  return (
    <div className='calendar-content'>
       <p className='employee-name'>{`${employee?.first_name} ${employee?.last_name}`}</p>
    </div>

  )
}
