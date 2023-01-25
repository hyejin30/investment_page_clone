import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Z_INDEX } from 'styles';

interface IDimmedProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

function Dimmed(props: IDimmedProps) {
  const { isOpen, onClose, ...restProps } = props;
  return isOpen ? <Container onClick={onClose} {...restProps} /> : null;
}

export default Dimmed;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);
  z-index: ${Z_INDEX.dimmed};
  cursor: default;
`;
