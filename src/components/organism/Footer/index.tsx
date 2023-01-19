import styled from 'styled-components';

import CompanyInfo from './CompanyInfo';
import CompanyLinks from './CompanyLinks';
import WrapperLayout from 'components/organism/Layout/WrapperLayout';

import { flex } from 'styles';

function Footer() {
  return (
    <Container>
      <WrapperLayout>
        <CompanyInfo />
        <CompanyLinks />
      </WrapperLayout>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  ${flex('center', '')}
  width: 100%;
`;
