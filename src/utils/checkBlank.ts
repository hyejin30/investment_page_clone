// T는 string | number
const checkBlank = <T>(array: T[]) => {
  const isValid = !array.some((el) => !el);
  return isValid;
};

export default checkBlank;
