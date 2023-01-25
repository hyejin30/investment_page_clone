import { MouseEvent, ChangeEvent, FocusEvent } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';

import { theme } from 'styles';

interface IDateSelectInputProps {
  title: string;
  value: string;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function DateSelectInput(props: IDateSelectInputProps) {
  const { title, onClick, onChange, ...restProps } = props;

  return (
    <StyledInput>
      <Input.Value title={title} onChange={onChange} {...restProps} />
      <Input.Right>
        <CalendarIcon title={title} onClick={onClick}>
          <img alt="calendar" src="images/ic-calendar-orange.svg" />
        </CalendarIcon>
      </Input.Right>
    </StyledInput>
  );
}

export default DateSelectInput;

const StyledInput = styled(Input)`
  input {
    border: 1px solid ${theme.GRAY_LIGHT_X2};
    border-radius: 5px;

    :hover {
      border: 1px solid ${theme.WHITE};
    }

    :focus {
      border: 1px solid ${theme.ORANGE};
    }
  }
`;

const CalendarIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 30px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
