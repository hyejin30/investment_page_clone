import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fitImg } from 'styles';

interface ILogoProps {
  path?: string;
  width?: number;
}

function Logo({ width = 156, path = '' }: ILogoProps) {
  if (path) {
    return (
      <Link to={path}>
        <Wrapper width={width}>
          <img alt="logo" src="/images/ic-logo.png" />
        </Wrapper>
      </Link>
    );
  }
  return (
    <Wrapper width={width}>
      <img alt="logo" src="/images/ic-logo.png" />
    </Wrapper>
  );
}

export default Logo;

interface IWrapperStyle {
  width: number;
}

const Wrapper = styled.button<IWrapperStyle>`
  width: ${(props) => props.width}px;
  cursor: pointer;
  ${fitImg}
`;
