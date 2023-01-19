import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles';

interface ITextMedium {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextMedium({ children, weight = 300, color = theme.white }: ITextMedium) {
  return (
    <Text color={color} weight={weight}>
      {children}
    </Text>
  );
}

export default TextMedium;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: 14px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
