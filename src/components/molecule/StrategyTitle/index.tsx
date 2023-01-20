import { ChangeEvent } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import { flex, fontSize, theme } from 'styles';

interface IStrategyTitleProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function StrategyTitle({ value, onChange }: IStrategyTitleProps) {
  return (
    <Wrapper>
      <TitleInput name="strategyTitle" placeholder="전략 이름을 입력해주세요." value={value} onChange={onChange} />
      <SaveBtn disabled={!value} type="button" onClick={() => {}}>
        전략 저장
      </SaveBtn>
    </Wrapper>
  );
}

export default StrategyTitle;

const Wrapper = styled.div`
  ${flex('', '')}
  column-gap: 60px;
`;

const TitleInput = styled(Input)`
  width: 100%;
  font-size: ${fontSize.large};
  font-weight: 700;
  border-bottom: 1px solid ${theme.white};
  color: ${theme.white};

  ::placeholder {
    color: ${theme.white};
  }

  :focus {
    ::-webkit-input-placeholder,
    textarea:focus::-webkit-input-placeholder {
      /* WebKit browsers */
      color: transparent;
    }

    :-moz-placeholder,
    textarea:focus:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: transparent;
    }

    ::-moz-placeholder,
    textarea:focus::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: transparent;
    }

    :-ms-input-placeholder,
    textarea:focus:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: transparent;
    }
  }
`;

const SaveBtn = styled(Button)`
  padding: 0 30px;
`;
