import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IContentsProps {
  children: ReactNode;
}

function Contents(props: IContentsProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default Contents;

const Container = styled.div`
  ${flex('space-between', 'center')}
`;
