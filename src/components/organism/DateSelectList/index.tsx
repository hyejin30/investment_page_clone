import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Calendar, DateSelect } from 'components/molecule';
import { flex } from 'styles';

function DateSelectList() {
  const now = dayjs();

  const [showStartDateCalendar, setShowStartDateCalendar] = useState(false);
  const [showEndDateCalendar, setShowEndDateCalendar] = useState(false);
  const [startDate, setStartDate] = useState(now.subtract(20, 'year').format('YYYY.MM.DD'));
  const [endDate, setEndDate] = useState(now.format('YYYY.MM.DD'));

  const toggleCalendar = (title: string) => {
    if (title === 'startDate') return setShowStartDateCalendar((prev) => !prev);
    if (title === 'endDate') return setShowEndDateCalendar((prev) => !prev);
  };

  const handleDateSelect = (title: 'startDate' | 'endDate', date: string) => {
    if (title === 'startDate') setStartDate(date);
    if (title === 'endDate') setEndDate(date);
    toggleCalendar(title);
  };

  return (
    <Container>
      <DateSelect>
        <DateSelect.Label htmlFor="startDate">시작일 설정</DateSelect.Label>
        <DateSelect.Input title="startDate" value={startDate} onClick={() => toggleCalendar('startDate')} />
        {showStartDateCalendar && (
          <CalendarWrap>
            <Calendar defaultDate={startDate} title="startDate" onSelect={handleDateSelect} />
          </CalendarWrap>
        )}
      </DateSelect>
      <DateSelect>
        <DateSelect.Label htmlFor="endDate">종료일 설정</DateSelect.Label>
        <DateSelect.Input title="endDate" value={endDate} onClick={() => toggleCalendar('endDate')} />
        {showEndDateCalendar && (
          <CalendarWrap>
            <Calendar defaultDate={endDate} title="endDate" onSelect={handleDateSelect} />
          </CalendarWrap>
        )}
      </DateSelect>
    </Container>
  );
}

export default DateSelectList;

const Container = styled.div`
  ${flex('', '')};
  column-gap: 15px;
`;

const CalendarWrap = styled.div`
  position: relative;
`;
