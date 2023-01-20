import styled from 'styled-components';

import Text from 'components/atoms/Text';

import { FOOTER_LINK_LIST } from '../constant';
import { theme, flex } from 'styles';

function CompanyLinks() {
  return (
    <List>
      {FOOTER_LINK_LIST.map((link) =>
        link.key === 'cafe' ? (
          <UnderLineLink href={link.path}>
            <Text.Small color={theme.lightGray}>{link.name}</Text.Small>
          </UnderLineLink>
        ) : (
          <a href={link.path}>
            <Text.Small color={theme.darkGray}>{link.name}</Text.Small>
          </a>
        ),
      )}
    </List>
  );
}

export default CompanyLinks;

const List = styled.section`
  ${flex('', '')}
  column-gap: 20px;
`;

const UnderLineLink = styled.a`
  text-decoration: underline;
  text-decoration-color: ${theme.darkGray};
`;
