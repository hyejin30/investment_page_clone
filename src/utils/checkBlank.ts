// T는 string | number
// 빈 문자열 이거나, '0'일 때 빈 값으로 간주
const checkBlank = <T>(array: T[]) => {
  const isValid = !array.some((el) => Number(el) === 0 || !el);
  return isValid;
};

export default checkBlank;
