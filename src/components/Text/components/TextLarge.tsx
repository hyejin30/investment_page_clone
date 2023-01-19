import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface ITextLarge {
  children: ReactNode;
  fontWeight?: number;
  color?: string;
}

function TextLarge({ children, fontWeight = 500, color = theme.white }: ITextLarge) {
  return (
    <Text color={color} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

export default TextLarge;

interface ITextStyle {
  fontWeight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: 18px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;
