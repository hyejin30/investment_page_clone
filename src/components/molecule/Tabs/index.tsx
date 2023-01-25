import { HTMLAttributes, useState, Children } from 'react';
import styled from 'styled-components';

import { Button } from 'components/atoms';
import { flex, theme } from 'styles';

interface ITabsProps extends HTMLAttributes<HTMLDivElement> {}

function Tabs({ children, ...restProps }: ITabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <Container {...restProps}>
      {children &&
        Children.toArray(children).map((child, index) => (
          <TabBtn isActive={index === activeTabIndex} onClick={() => handleTabClick(index)}>
            {child}
          </TabBtn>
        ))}
    </Container>
  );
}

export default Tabs;

interface ITabBtnStyle {
  isActive: boolean;
}

const Container = styled.div`
  ${flex('', '')}
`;

const TabBtn = styled(Button)<ITabBtnStyle>`
  background: ${(props) => (props.isActive ? theme.ORANGE : theme.GRAY_DARK_X3)};
  span {
    color: ${(props) => (props.isActive ? theme.BLACK : theme.WHITE)};
    font-weight: ${(props) => (props.isActive ? 500 : 300)};
  }
`;
