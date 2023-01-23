import { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Calendar, DateSelect } from 'components/molecule';
import { flex } from 'styles';

function DateSelectList() {
  const now = dayjs().format('YYYY.MM.DD');

  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(now);

  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);

  const toggleCalendar = (e: MouseEvent<HTMLDivElement>) => {
    const { title } = e.currentTarget;
    if (title === 'startDate') return setShowStartDateCalendar((prev) => !prev);
    if (title === 'endDate') return setShowEndDateCalendar((prev) => !prev);
  };

  const handleDateSelect = (title: 'startDate' | 'endDate', date: string) => {
    if (title === 'startDate') return setStartDate(date);
    if (title === 'endDate') return setEndDate(date);
  };

  return (
    <Container>
      <DateSelect>
        <DateSelect.Label htmlFor="startDate">시작일 설정</DateSelect.Label>
        <DateSelect.Input title="startDate" value={startDate} onClick={toggleCalendar} />
        {showStartDateCalendar && <Calendar onSelect={handleDateSelect} />}
      </DateSelect>
      <DateSelect>
        <DateSelect.Label htmlFor="endDate">종료일 설정</DateSelect.Label>
        <DateSelect.Input title="endDate" value={endDate} onClick={toggleCalendar} />
        {showEndDateCalendar && <Calendar onSelect={handleDateSelect} />}
      </DateSelect>
    </Container>
  );
}

export default DateSelectList;

const Container = styled.div`
  ${flex('', '')};
  column-gap: 15px;
`;
