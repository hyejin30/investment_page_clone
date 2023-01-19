import styled from 'styled-components';

import CompanyInfo from './CompanyInfo';
import CompanyLinks from './CompanyLinks';

import { flex } from 'styles';

function Footer() {
  return (
    <Container>
      <CompanyInfo />
      <CompanyLinks />
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  ${flex('space-between', '')}
`;
