import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: string;
  color?: string;
  disabled?: boolean;
  padding?: string;
  type?: 'button' | 'submit';
  onClick: () => void;
}

function Button({
  children,
  background = theme.orange,
  color = theme.black,
  disabled = false,
  padding,
  type = 'button',
  onClick,
}: IButtonProps) {
  return (
    <StyledButton
      background={background}
      color={color}
      disabled={disabled}
      padding={padding}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

type IButtonStyle = Omit<IButtonProps, 'children'>;

const StyledButton = styled.button<IButtonStyle>`
  border-radius: 5px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  white-space: nowrap;

  :disabled {
    background: ${theme.button.disabled};
    color: ${theme.black};
  }
`;
