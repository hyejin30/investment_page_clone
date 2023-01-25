// 기능 : value 배열을 전달 받아, value가 빈 문자열 이거나, '0'일 때 빈 값으로 간주한다.
// 리턴 : 빈 값이 없으면 true, 있으면 false
// 타입 : T는 string | number
const checkBlank = <T>(array: T[]) => {
  const isValid = !array.some((el) => Number(el) === 0 || !el);
  return isValid;
};

export default checkBlank;
