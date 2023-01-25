import styled from 'styled-components';

import Text from 'components/atoms/Text';

import { FOOTER_LINK_LIST } from '../constant';
import { theme, flex } from 'styles';

function CompanyLinks() {
  return (
    <List>
      {FOOTER_LINK_LIST.map((link, idx) =>
        link.key === 'cafe' ? (
          <UnderLineLink key={`footer-link-${idx}`} href={link.path}>
            <Text.Small color={theme.GRAY_LIGHT_X3} weight={400}>
              {link.name}
            </Text.Small>
          </UnderLineLink>
        ) : (
          <a key={`footer-link-${idx}`} href={link.path}>
            <Text.Small color={theme.GRAY_DARK_X1} weight={400}>
              {link.name}
            </Text.Small>
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
  text-decoration-color: ${theme.GRAY_DARK_X1};
`;
