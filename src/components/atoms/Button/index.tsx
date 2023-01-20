import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
}

function Button(props: IButtonProps) {
  const { type = 'button', children, ...restProps } = props;

  return (
    <StyledButton type={type} {...restProps}>
      {children}
    </StyledButton>
  );
}

export default Button;

type IButtonStyle = Omit<IButtonProps, 'children'>;

const StyledButton = styled.button<IButtonStyle>`
  border-radius: 5px;
  background: ${theme.orange};
  color: ${theme.black};
  white-space: nowrap;

  :disabled {
    background: ${theme.button.disabled};
    color: ${theme.black};
  }
`;
