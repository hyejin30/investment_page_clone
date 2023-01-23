import styled from 'styled-components';

interface ICalendarProps {
  onSelect: (title: 'startDate' | 'endDate', date: string) => void;
}

export default function Calendar({ onSelect }: ICalendarProps) {
  return (
    <div>
      <Item onClick={() => onSelect('startDate', '2023.01.01')}>1</Item>
      rdp 캘린더
    </div>
  );
}

const Item = styled.div``;
