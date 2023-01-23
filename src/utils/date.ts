// date : YYYYMMDD
// return : YYYY.MM.DD
export const addDotToDate = (date: string) => date.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
