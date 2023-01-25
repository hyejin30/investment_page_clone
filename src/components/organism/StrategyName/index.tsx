import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

import { flex, fontSize, theme, Z_INDEX } from 'styles';

interface IStrategyNameProps {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
}

function StrategyName({ value, onChange, onSave }: IStrategyNameProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <Input>
        <InputValue
          placeholder="전략 이름을 입력해주세요."
          textAlign="left"
          title="strategyName"
          value={value}
          onChange={handleInputChange}
        />
      </Input>
      <SaveBtn disabled={!value} type="button" weight={400} onClick={onSave}>
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
  background: ${theme.BLACK};
  z-index: ${Z_INDEX.header};
`;

const InputValue = styled(Input.Value)`
  padding: 0;
  border-bottom: 2px solid ${theme.WHITE};
  font-size: ${fontSize.large};
  font-weight: 700;
  color: ${theme.WHITE};

  ::placeholder {
    font-weight: 700;
  }
`;

const SaveBtn = styled(Button)`
  padding: 10px 30px 12px;
`;
