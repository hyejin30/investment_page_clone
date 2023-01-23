import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

import { flex, fontSize, theme, Z_INDEX } from 'styles';

interface IStrategyNameProps {
  onChange: (value: string) => void;
  onSave: () => void;
}

function StrategyName({ onChange, onSave }: IStrategyNameProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  return (
    <Wrapper>
      <Input>
        <InputValue
          placeholder="전략 이름을 입력해주세요."
          textAlign="left"
          title="strategyName"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Input>
      <SaveBtn disabled={!inputValue} type="button" onClick={onSave}>
        전략 저장
      </SaveBtn>
    </Wrapper>
  );
}

export default StrategyName;

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
