import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';

import { date } from 'utils/regex';
import { theme } from 'styles';

interface IDateSelectInputProps {
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function DateSelectInput(props: IDateSelectInputProps) {
  const { onClick, ...restProps } = props;

  return (
    <Input>
      <StyledInputValue readOnly pattern={date} {...restProps} />
      <Input.Right>
        <CalendarIcon title={restProps.title} onClick={onClick}>
          <img alt="calendar" src="/images/ic-calendar-orange.svg" />
        </CalendarIcon>
      </Input.Right>
    </Input>
  );
}

export default DateSelectInput;

const StyledInputValue = styled(Input.Value)`
  border: 1px solid ${theme.border.lightGray};
  border-radius: 5px;

  :hover {
    border: 1px solid ${theme.white};
  }

  :focus {
    border: 1px solid ${theme.orange};
  }
`;

const CalendarIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 30px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
