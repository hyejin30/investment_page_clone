import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';

import { flex, theme } from 'styles';

interface ISelectInputProps {
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function SelectInput(props: ISelectInputProps) {
  const { onClick, ...restProps } = props;

  return (
    <Wrapper title={restProps.title} onClick={onClick}>
      <StyledInput readOnly {...restProps} />
      <Arrow>
        <img alt="arrow down" src="/images/ic-arrow-down-orange.svg" />
      </Arrow>
    </Wrapper>
  );
}

export default SelectInput;

const Wrapper = styled.div`
  ${flex('', '')}
  position: relative;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${theme.border.lightGray};
  border-radius: 5px;
  cursor: pointer;
`;

const StyledInput = styled(Input)`
  width: 100%;
  text-align: center;
  color: ${theme.white};
  cursor: pointer;
`;

const Arrow = styled.div`
  position: absolute;
  right: 20px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
