import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import { flex, theme } from 'styles';

interface IStrategyTitleProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
}

function StrategyTitle({ value, onChange }: IStrategyTitleProps) {
  return (
    <Wrapper>
      <TitleInput name="strategyTitle" placeholder="전략 이름을 입력해주세요." value={value} onChange={onChange} />
      <Button disabled={!value} padding="0 30px" type="button" onClick={() => {}}>
        전략 저장
      </Button>
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
  font-size: 28px;
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

// const Button = styled.button`
//   padding: 0 30px;
//   border-radius: 5px;
//   background: ${theme.orange};
//   white-space: nowrap;

//   :disabled {
//     background: ${theme.button.disabled};
//     color: ${theme.black};
//   }
// `;
