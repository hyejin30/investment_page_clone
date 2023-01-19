import { HTMLAttributes } from 'react';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  name: HTMLInputElement['name'];
  max?: number;
  maxLength?: number;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value: string;
}

function Input(props: IInputProps) {
  const { max, maxLength, type = 'text', ...otherProps } = props;

  // number - max, 그 외 - maxLength 사용
  if (type === 'number') return <input max={max} {...otherProps} />;
  return <input maxLength={maxLength} {...otherProps} />;
}

export default Input;
