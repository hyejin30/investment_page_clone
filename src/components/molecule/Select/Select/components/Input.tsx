import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';
import { theme } from 'styles';

interface ISelectInputProps {
  placeholder?: string;
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function SelectInput(props: ISelectInputProps) {
  const { onClick, ...restProps } = props;

  return (
    <StyledInput title={restProps.title} onClick={onClick}>
      <StyledInputValue readOnly {...restProps} />
      <Input.Right>
        <Arrow>
          <img alt="arrow down" src="/images/ic-arrow-down-orange.svg" />
        </Arrow>
      </Input.Right>
    </StyledInput>
  );
}

export default SelectInput;

const StyledInput = styled(Input)`
  cursor: pointer;
`;

const StyledInputValue = styled(Input.Value)`
  border: 1px solid ${theme.border.lightGray};
  border-radius: 5px;
  cursor: pointer;

  :hover {
    border: 1px solid ${theme.white};
  }

  :focus {
    border: 1px solid ${theme.orange};
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 12px;
  right: 30px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
