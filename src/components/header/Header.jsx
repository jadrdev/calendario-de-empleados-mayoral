import React from 'react'
import MayoralLogo from '../../assets/img/Mayoral_Logo_2018.svg'
import '../../styles/header.css'
export const Header = () => {
  return (
    <div className="header">
      <img src={MayoralLogo} alt="mayoral-logo" />
      <h2>Calendario de empleados</h2>
    </div>
  )
}
