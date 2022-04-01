import moment from "moment";


export const getNumberOfMonth = (mes) => {
  const monthNumber = moment().month(mes).format("M");
  return ('0' + monthNumber).slice(-2);
};

export const getDiasLibres = (employeeId, diaslibres) => {
    const filtroDiasLibres = diaslibres.filter((dias) => dias.employeeId === employeeId);
    return filtroDiasLibres[0]?.diasSeleccionados;
}
  
