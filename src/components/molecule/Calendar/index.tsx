/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';

import { fontSize, theme } from 'styles';
import 'react-day-picker/dist/style.css';

interface ICalendarProps {
  onSelect: (title: 'startDate' | 'endDate', date: string) => void;
}

export default function Calendar({ onSelect }: ICalendarProps) {
  const [selected, setSelected] = useState<Date>();
  const currentYear = dayjs().year();

  useEffect(() => onSelect('startDate', '2023.01.12'), []);

  return (
    <Container>
      <DayPicker
        captionLayout="dropdown"
        fromYear={currentYear - 10}
        locale={ko}
        mode="single"
        selected={selected}
        toYear={currentYear}
        onSelect={setSelected}
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;

  .rdp {
    margin: 0;
    padding: 10px;
    background: ${theme.lightBlack};
    border: 1px solid ${theme.gray};
    border-radius: 5px;
    color: ${theme.white};
  }

  .rdp-caption {
    padding: 5px 0;
  }

  .rdp-dropdown_year {
    position: relative;
    left: -60px;
  }

  .rdp-dropdown_month {
    position: relative;
    left: 80px;
  }

  .rdp-head_cell {
    font-size: ${fontSize.regular};
    color: ${theme.lightGray};
  }

  .rdp-day {
    font-size: ${fontSize.regular};
    color: ${theme.lightGray};

    :hover {
      background: ${theme.darkGray} !important;
    }
  }

  .rdp-day_selected {
    background: ${theme.orange};
    color: ${theme.white};
  }
`;
