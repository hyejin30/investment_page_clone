import styled from 'styled-components';

import Logo from 'components/atoms/Logo';
import Text from 'components/atoms/Text';

import { FOOTER_DETAIL_LIST } from '../constant';
import { flex, theme } from 'styles';

function CompanyInfo() {
  return (
    <Wrapper>
      <Logo />
      <Detail>
        <Text.Medium color={theme.GRAY_LIGHT_X2} weight={500}>
          주식회사 퀀터스테크놀로지스
        </Text.Medium>
        {FOOTER_DETAIL_LIST.map((detail, idx) => (
          <Text.Small key={`footer-detail-${idx}`} color={theme.GRAY_LIGHT_X3}>
            {detail}
          </Text.Small>
        ))}
      </Detail>
      <Text.Small color={theme.GRAY_DARK_X1}>© 2023 Quantus Technologies. All rights reserved.</Text.Small>
    </Wrapper>
  );
}

export default CompanyInfo;

const Wrapper = styled.section`
  ${flex('', '', 'column')}
  row-gap: 25px;
`;

const Detail = styled.div`
  ${flex('', '', 'column')}
  row-gap: 20px;
`;
