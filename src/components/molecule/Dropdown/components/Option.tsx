import { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import { Text } from 'components/atoms';
import { theme } from 'styles';

interface IOptionProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

function Option({ children, isActive, onClick }: IOptionProps) {
  return (
    <Container isActive={isActive} onClick={onClick}>
      <Text.Regular>{children}</Text.Regular>
    </Container>
  );
}

export default Option;

interface IActive {
  isActive: boolean;
}

const Container = styled.li<IActive>`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: ${theme.white};
  cursor: pointer;
  ${(props) => props.isActive && ActiveStyle}
`;

const ActiveStyle = css`
  background: rgba(236, 97, 38, 0.3);
`;
