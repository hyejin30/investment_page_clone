import { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSize, theme } from 'styles';

interface ITextSmall {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextSmall(props: ITextSmall) {
  const { children, weight = 300, color = theme.white, ...restProps } = props;

  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default TextSmall;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.small};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
