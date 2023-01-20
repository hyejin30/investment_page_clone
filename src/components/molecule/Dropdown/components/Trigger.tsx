import { ReactNode } from 'react';

interface ITriggerProps {
  children: ReactNode;
}

function Trigger({ children }: ITriggerProps) {
  return <div>{children}</div>;
}

export default Trigger;
