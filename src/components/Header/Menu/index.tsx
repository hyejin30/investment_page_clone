import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Text from 'components/Text';

import { theme } from 'styles';

interface IMenuProps {
  children: ReactNode;
  path: string;
}

function Menu({ children, path }: IMenuProps) {
  const { pathname } = useLocation();

  return (
    <Link to={path}>
      <Text.Medium color={pathname === path ? theme.red : theme.white} fontWeight={400}>
        {children}
      </Text.Medium>
    </Link>
  );
}

export default Menu;
