import { ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { Text } from 'components/atoms';

interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  textAlign?: 'left' | 'center' | 'right';
}

function Title(props: ITitleProps) {
  const { children, textAlign = 'center', ...restProps } = props;
  return (
    <Container textAlign={textAlign} {...restProps}>
      <Text.Regular weight={700}>{children}</Text.Regular>
    </Container>
  );
}

export default Title;

type IContainerStyle = Pick<ITitleProps, 'textAlign'>;

const Container = styled.div<IContainerStyle>`
  margin-top: 30px;
  text-align: ${(props) => props.textAlign};
`;
