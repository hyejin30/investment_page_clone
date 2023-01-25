import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { flex, theme, Z_INDEX } from 'styles';

interface IContentsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

function Contents(props: IContentsProps) {
  const { children, isOpen, ...restProps } = props;
  return isOpen ? <Container {...restProps}>{children}</Container> : null;
}

export default Contents;

const Container = styled.div`
  ${flex('', 'center', 'column')};
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: ${theme.lightBlack};
  border-radius: 8px;
  border-bottom: 1px solid ${theme.black};
  z-index: ${Z_INDEX.modal};
`;
