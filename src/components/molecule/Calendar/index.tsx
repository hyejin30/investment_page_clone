import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import dayjs from 'dayjs';

import { fontSize, theme } from 'styles';
import { DateType } from 'types/date';
import 'react-day-picker/dist/style.css';

interface ICalendarProps {
  defaultDate: string;
  title: DateType;
  onSelect: (title: DateType, date: string) => void;
}

export default function Calendar({ defaultDate, title, onSelect }: ICalendarProps) {
  const [selected, setSelected] = useState<Date>();
  const currentYear = dayjs().year();
  const [defaultYear, defaultMonth] = defaultDate.split('.');

  useEffect(() => {
    if (!selected) return;
    const date = dayjs(selected).format('YYYY.MM.DD');
    onSelect(title, date);
  }, [selected]);

  return (
    <Container>
      <DayPicker
        captionLayout="dropdown"
        defaultMonth={new Date(+defaultYear, +defaultMonth - 1)}
        fromYear={currentYear - 20}
        locale={ko}
        mode="single"
        selected={selected || new Date(defaultDate)}
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
    padding: 20px 15px 15px;
    background: ${theme.lightBlack};
    border: 1px solid ${theme.gray};
    border-radius: 5px;
    color: ${theme.white};
  }

  .rdp-caption {
    margin-bottom: 5px;
  }

  .rdp-dropdown_year {
    position: relative;
    left: -55px;
  }

  .rdp-dropdown_month {
    position: relative;
    left: 85px;
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
