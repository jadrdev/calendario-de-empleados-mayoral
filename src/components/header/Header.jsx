import React, { useContext } from 'react'
import MayoralLogo from '../../assets/img/Mayoral_Logo_2018.svg'
import { CalendarContex } from '../../context/CalendarContex';
import '../../styles/header.css'
import { meses } from '../../utils/contants';
import {types} from '../../types/index'
   
export const Header = () => {

  const { dispatch } = useContext(CalendarContex)

   const handleMonth = (e) => {
    const action = {
      type: types.setMonth,
      payload: { mes: e.target.value }
    }      
    dispatch(action)
  }
  
  
  
  return (
    <div className="header">
      <img src={MayoralLogo} alt="mayoral-logo" />
      <h2>Calendario de empleados</h2>
      <h3>Seleciona el mes que quieres revisar</h3>
     
       <select 
        onChange={handleMonth}
        className="month-selector"
      >
          {meses.map((meses) => (
            <option key={meses} value={meses}>{meses}</option>
          ))}
      </select>

     
      <div className="Esquema">
        <b className="text">Leyenda de colores</b>
        <div className="explicacion">
          <b>Fines de semana</b>
          <div className="colorFindes">
          </div>
        </div>
        <div className="explicacion">
          <b className="text">Vacaciones</b>
        <div className="colorVacas">
          </div>
        </div>
      </div>
    </div>
  )
}
