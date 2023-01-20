import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import { flex, fontSize, theme } from 'styles';

interface IStrategyTitleProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function StrategyTitle({ title, value, onChange }: IStrategyTitleProps) {
  return (
    <Wrapper>
      <Input>
        <InputValue placeholder="전략 이름을 입력해주세요." title={title} value={value} onChange={onChange} />
      </Input>
      <SaveBtn disabled={!value} type="button" onClick={() => {}}>
        전략 저장
      </SaveBtn>
    </Wrapper>
  );
}

export default StrategyTitle;

const Wrapper = styled.section`
  ${flex('', '')}
  column-gap: 60px;
  position: sticky;
  top: 133px;
  padding: 30px 0 20px;
  background: ${theme.black};
  z-index: 1;
`;

const InputValue = styled(Input.Value)`
  border-bottom: 1px solid ${theme.white};
  font-size: ${fontSize.large};
  font-weight: 700;
  color: ${theme.white};
`;

const SaveBtn = styled(Button)`
  padding: 0 30px;
`;
