import moment from "moment";

export const getNumberOfMonth = (mes) => {
  const monthNumber = moment().month(mes).format("M");
  return ('0' + monthNumber).slice(-2);
};