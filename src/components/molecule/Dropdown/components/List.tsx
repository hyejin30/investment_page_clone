import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex, theme } from 'styles';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  isOpen: boolean;
}

function List({ children, isOpen }: IListProps) {
  return isOpen ? <Container>{children}</Container> : null;
}

export default List;

const Container = styled.ul`
  ${flex('', '', 'column')}
  position: absolute;
  top: 80px;
  width: 100%;
  background: ${theme.background.darkGray};
  border: 1px solid ${theme.border.gray};
  border-radius: 5px;
  text-align: center;
  z-index: 1;
`;
