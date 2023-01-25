import { ReactNode } from 'react';
import Text from 'components/atoms/Text';
import { theme } from 'styles';

interface ISubMessageProps {
  children: ReactNode;
  color?: string;
}

function SubMessage({ color = theme.GRAY_LIGHT_X3, children }: ISubMessageProps) {
  return <Text.Small color={color}>{children}</Text.Small>;
}

export default SubMessage;
