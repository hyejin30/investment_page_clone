import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface IOptionProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}

function Option({ children }: IOptionProps) {
  return <Container>{children}</Container>;
}

export default Option;

const Container = styled.li`
  width: 100%;
  padding: 10px;
`;
