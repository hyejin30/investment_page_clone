import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex, theme } from 'styles';

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
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${theme.border.lightGray};
  border-radius: 5px;
`;
