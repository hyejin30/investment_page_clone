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
    <li>
      <Link to={path}>
        <Text.Regular color={pathname === path ? theme.RED : theme.WHITE} weight={pathname === path ? 700 : 400}>
          {children}
        </Text.Regular>
      </Link>
    </li>
  );
}

export default NavMenu;
