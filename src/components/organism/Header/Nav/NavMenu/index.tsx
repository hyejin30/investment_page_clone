import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Text from 'components/atoms/Text';

import { theme } from 'styles';

interface INavMenuProps {
  children: ReactNode;
  path: string;
}

function NavMenu({ children, path }: INavMenuProps) {
  const { pathname } = useLocation();

  return (
    <Link to={path}>
      <Text.Medium color={pathname === path ? theme.red : theme.white} weight={400}>
        {children}
      </Text.Medium>
    </Link>
  );
}

export default NavMenu;
