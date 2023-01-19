import { ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IWrapperLayoutProps {
  children: ReactNode;
}

function WrapperLayout({ children }: IWrapperLayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default WrapperLayout;

const Wrapper = styled.div`
  ${flex('space-between', '')};
  width: 1020px;
`;
