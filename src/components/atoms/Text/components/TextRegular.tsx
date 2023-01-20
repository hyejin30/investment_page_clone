import { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSize, theme } from 'styles';

interface ITextRegular {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function TextRegular({ children, weight = 300, color = theme.white }: ITextRegular) {
  return (
    <Text color={color} weight={weight}>
      {children}
    </Text>
  );
}

export default TextRegular;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: ${fontSize.regular};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
