import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
}

function Button(props: IButtonProps) {
  const { type = 'button', bgColor = theme.orange, children, ...restProps } = props;

  return (
    <StyledButton bgColor={bgColor} type={type} {...restProps}>
      {children}
    </StyledButton>
  );
}

export default Button;

type IButtonStyle = Omit<IButtonProps, 'children'>;

const StyledButton = styled.button<IButtonStyle>`
  border-radius: 8px;
  background: ${(props) => props.bgColor};
  white-space: nowrap;

  :disabled {
    background: ${theme.gray};
    color: ${theme.black};
  }
`;
