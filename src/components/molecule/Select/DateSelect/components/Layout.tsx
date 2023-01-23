import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IDateSelectLayoutProps {
  children: ReactNode;
}

function DateSelectLayout({ children }: IDateSelectLayoutProps) {
  return <Container>{children}</Container>;
}

export default DateSelectLayout;

const Container = styled.div`
  ${flex('', '', 'column')};
  width: 100%;
  row-gap: 15px;
`;
