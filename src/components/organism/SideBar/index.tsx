import { ReactNode } from 'react';

interface ISideBarProps {
  children: ReactNode;
}

function SideBar(props: ISideBarProps) {
  const { children, ...restProps } = props;
  return <aside {...restProps}>{children}</aside>;
}

export default SideBar;
