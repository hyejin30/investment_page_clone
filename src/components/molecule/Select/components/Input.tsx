import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';

interface ISelectInputProps {
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function SelectInput(props: ISelectInputProps) {
  const { onClick, ...restProps } = props;

  return (
    <StyledInput title={restProps.title} onClick={onClick}>
      <Input.Value readOnly {...restProps} />
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

  input {
    cursor: pointer;
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
