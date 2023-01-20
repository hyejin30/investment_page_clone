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
      <Input>
        <Input.Contents>
          <InputValue readOnly {...restProps} />
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
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${theme.border.lightGray};
  border-radius: 5px;
  cursor: pointer;
`;

const InputValue = styled(Input.Value)`
  text-align: center;
  color: ${theme.white};
  cursor: pointer;
`;

const Arrow = styled.div`
  position: absolute;
  top: 12px;
  right: 20px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
