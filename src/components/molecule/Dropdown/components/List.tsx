import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex, theme, Z_INDEX } from 'styles';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  isOpen: boolean;
}

function List(props: IListProps) {
  const { isOpen, children, ...restProps } = props;
  return isOpen ? <Container {...restProps}>{children}</Container> : null;
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
  overflow-y: auto;
  z-index: ${Z_INDEX.dropdown};

  /* hide scroll */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
