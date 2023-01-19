import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface ITextLarge {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextLarge({ children, weight = 500, color = theme.white }: ITextLarge) {
  return (
    <Text color={color} weight={weight}>
      {children}
    </Text>
  );
}

export default TextLarge;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: 18px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
