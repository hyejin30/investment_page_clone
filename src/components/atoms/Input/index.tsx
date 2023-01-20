import { HTMLAttributes } from 'react';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  title: HTMLInputElement['title'];
  max?: number;
  maxLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'number' | 'email' | 'password';
  value: string;
}

function Input(props: IInputProps) {
  const { max, maxLength, type = 'text', ...restProps } = props;

  // number - max, 그 외 - maxLength 사용
  if (type === 'number') return <input max={max} {...restProps} />;
  return <input maxLength={maxLength} {...restProps} />;
}

export default Input;
