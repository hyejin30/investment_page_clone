import { ReactNode } from 'react';
import styled from 'styled-components';

interface ITextSmall {
  children: ReactNode;
  fontWeight?: number;
  color?: string;
}

function TextSmall({ children, fontWeight = 300, color = '#fcfcfc' }: ITextSmall) {
  return (
    <Text color={color} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

export default TextSmall;

interface ITextStyle {
  fontWeight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  font-size: 12px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;
