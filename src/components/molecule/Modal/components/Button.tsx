import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { Button } from 'components/atoms';
import { theme } from 'styles';

interface IModalButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?: string;
  onClick: () => void;
}

function ModalButton({ children, bgColor = 'none', color = theme.orange, ...restProps }: IModalButtonProps) {
  return (
    <StyledButton bgColor={bgColor} color={color} {...restProps}>
      {children}
    </StyledButton>
  );
}

export default ModalButton;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 15px 0;
`;
