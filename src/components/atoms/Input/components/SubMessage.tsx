import { ReactNode } from 'react';
import Text from 'components/atoms/Text';

interface ISubMessageProps {
  children: ReactNode;
}

function SubMessage({ children }: ISubMessageProps) {
  return <Text.Small>{children}</Text.Small>;
}

export default SubMessage;
