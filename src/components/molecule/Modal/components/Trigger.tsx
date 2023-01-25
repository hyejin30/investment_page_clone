import { ReactNode, HTMLAttributes } from 'react';

interface ITriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Trigger(props: ITriggerProps) {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
}

export default Trigger;
