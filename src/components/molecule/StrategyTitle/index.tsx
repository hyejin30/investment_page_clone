import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button';

import { flex, fontSize, theme, Z_INDEX } from 'styles';

interface IStrategyTitleProps {
  title: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function StrategyTitle({ title, value, onChange }: IStrategyTitleProps) {
  return (
    <Wrapper>
      <Input>
        <InputValue
          placeholder="전략 이름을 입력해주세요."
          textAlign="left"
          title={title}
          value={value}
          onChange={onChange}
        />
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
  top: 131.5px;
  padding: 30px 0 20px;
  background: ${theme.black};
  z-index: ${Z_INDEX.header};
`;

const InputValue = styled(Input.Value)`
  padding: 0;
  border-bottom: 2px solid ${theme.white};
  font-size: ${fontSize.large};
  font-weight: 700;
  color: ${theme.white};

  ::placeholder {
    font-weight: 700;
  }
`;

const SaveBtn = styled(Button)`
  padding: 0 30px;
`;
