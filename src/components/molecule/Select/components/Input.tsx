import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';

import { flex } from 'styles';

interface ISelectInputProps {
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function SelectInput(props: ISelectInputProps) {
  const { onClick, ...restProps } = props;

  return (
    <Wrapper title={restProps.title} onClick={onClick}>
      <Input>
        <Input.Contents>
          <Input.Value readOnly {...restProps} />
          <Input.Right>
            <Arrow>
              <img alt="arrow down" src="/images/ic-arrow-down-orange.svg" />
            </Arrow>
          </Input.Right>
        </Input.Contents>
      </Input>
    </Wrapper>
  );
}

export default SelectInput;

const Wrapper = styled.div`
  ${flex('', '')}
  position: relative;
  cursor: pointer;

  input {
    cursor: pointer;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 12px;
  right: 20px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
