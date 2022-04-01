import React, {useReducer} from 'react'
import { Header } from './components/header/Header'
import { Calendar } from './components/calendar/Calendar'
import { CalendarContex } from './context/CalendarContex'
import { CalendarReducer } from './context/CalendarReducer'
import './styles/calendar.css'
export const App = () => {


  const [state, dispatch] = useReducer(CalendarReducer, {
    mes: 'Enero',
    vacaciones: [],
    diaslibres: [],
  })


  return (
    <>
      
      <CalendarContex.Provider value={{
        state,
        dispatch
      }}>       
        <div className='container'>
          <Header />
          <Calendar />
        </div>
      </CalendarContex.Provider>
    </>
  )
}

export default App;
