import styled from 'styled-components';
import Input from '..';
import { theme } from 'styles';
import { ChangeEvent } from 'react';

interface INumberInputProps {
  label?: string;
  max?: number;
  min?: number;
  subMessage?: string;
  value: number;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function NumberInput({ label, max, min, subMessage, value, title, onChange }: INumberInputProps) {
  return (
    <StyledInput>
      {label && <Input.Label htmlFor={title}>{label}</Input.Label>}
      <Input.Value
        max={max}
        min={min}
        textAlign="center"
        title={title}
        type="number"
        value={value}
        onChange={onChange}
      />
      <Input.Right>
        <Percentage>%</Percentage>
      </Input.Right>
      <Input.SubMessage>{subMessage}</Input.SubMessage>
    </StyledInput>
  );
}

export default NumberInput;

const StyledInput = styled(Input)`
  input {
    border: 1px solid ${theme.border.lightGray};
    border-radius: 5px;

    :hover {
      border: 1px solid ${theme.white};
    }

    :focus {
      border: 1px solid ${theme.orange};
    }
  }
`;

const Percentage = styled.span`
  position: absolute;
  top: 45px;
  right: 28px;
  color: ${theme.white};
`;
