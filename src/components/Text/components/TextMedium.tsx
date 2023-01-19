import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface ITextMedium {
  children: ReactNode;
  fontWeight?: number;
  color?: string;
}

function TextMedium({ children, fontWeight = 300, color = theme.white }: ITextMedium) {
  return (
    <Text color={color} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

export default TextMedium;

interface ITextStyle {
  fontWeight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: 14px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;
