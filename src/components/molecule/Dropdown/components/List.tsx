import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  isOpen: boolean;
}

function List(props: IListProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default List;

const Container = styled.ul`
  ${flex('', '', 'column')}
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 1;
`;
