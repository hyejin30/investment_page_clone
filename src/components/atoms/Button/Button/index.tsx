import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

import Text from 'components/atoms/Text';
import { theme } from 'styles';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?: string;
  children: ReactNode;
  disabled?: boolean;
  weight?: number;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
}

function Button(props: IButtonProps) {
  const { type = 'button', bgColor = theme.ORANGE, color = theme.BLACK, weight = 700, children, ...restProps } = props;

  return (
    <StyledButton bgColor={bgColor} color={color} type={type} {...restProps}>
      <Text.Regular color={color} weight={weight}>
        {children}
      </Text.Regular>
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
    background: ${theme.GRAY_DARK_X2};
    color: ${theme.BLACK};
  }
`;
