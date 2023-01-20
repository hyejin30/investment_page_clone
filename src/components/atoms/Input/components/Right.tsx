import { ReactNode } from 'react';

interface IRightProps {
  children: ReactNode;
}

function Right({ children }: IRightProps) {
  return <div>{children}</div>;
}

export default Right;
