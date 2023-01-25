import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Layout(props: ILayoutProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  ${flex('', '', 'column')};
`;
