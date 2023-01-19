import styled from 'styled-components';

import Text from 'components/Text';

import { FOOTER_LINK_LIST } from '../constant';
import { theme, flex } from 'styles';

function ComapanyLinks() {
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

export default ComapanyLinks;

const List = styled.section`
  ${flex('', '')}
  column-gap: 20px;
`;

const UnderLineLink = styled.a`
  text-decoration: underline;
  text-decoration-color: ${theme.darkGray};
`;
