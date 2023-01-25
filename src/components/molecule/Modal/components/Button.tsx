import styled from 'styled-components';
import { Button } from 'components/atoms';
import { HTMLAttributes } from 'react';

interface IModalButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  onClick: () => void;
}

function ModalButton({ children, ...restProps }: IModalButtonProps) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default ModalButton;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 15px 0;
`;
