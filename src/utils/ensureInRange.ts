// 기능1 : value를 min ~ max 사이에서 입력될 수 있도록 한다.
// 기능2 : hasPrefixZero를 통해 '01' -> '1'로 변환한다.

const ensureInRange = (value: string, min: number, max: number): string => {
  const hasPrefixZero = value.startsWith('0');
  const num = Number(hasPrefixZero ? value.replaceAll('0', '') : value);

  if (num < min) return String(min);
  if (num > max) return String(max);

  return String(num);
};

export default ensureInRange;
