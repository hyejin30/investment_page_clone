import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';

import { theme } from 'styles';

interface INumberInputProps {
  label?: string;
  subMessage?: string;
  value: string;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function NumberInput({ label, subMessage, value, title, onChange }: INumberInputProps) {
  return (
    <StyledInput>
      {label && <Input.Label htmlFor={title}>{label}</Input.Label>}
      <Input.Value textAlign="center" title={title} type="number" value={value} onChange={onChange} />
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
    border: 1px solid ${theme.GRAY_LIGHT_X2};
    border-radius: 5px;

    :hover {
      border: 1px solid ${theme.WHITE};
    }

    :focus {
      border: 1px solid ${theme.ORANGE};
    }
  }
`;

const Percentage = styled.span`
  position: absolute;
  top: 45px;
  right: 28px;
  color: ${theme.WHITE};
`;
