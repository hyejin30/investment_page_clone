import styled from 'styled-components';

import { Input } from 'components/atoms';

import { flex, theme } from 'styles';
import { HTMLAttributes } from 'react';

interface ISelectInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
}

function SelectInput(props: ISelectInputProps) {
  return (
    <Wrapper>
      <StyledInput readOnly {...props} />
      <Arrow>
        <img alt="arrow down" src="/images/ic-arrow-down-orange.svg" />
      </Arrow>
    </Wrapper>
  );
}

export default SelectInput;

const Wrapper = styled.div`
  ${flex('', '')}
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${theme.lightGray};
  border-radius: 5px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  text-align: center;
`;

const Arrow = styled.div`
  width: 10px;
  height: 10px;
`;
