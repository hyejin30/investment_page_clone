import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from 'components/atoms/Button/Button';

import { fitImg, theme, flex } from 'styles';

interface IResetButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function ResetButton({ children, onClick }: IResetButtonProps) {
  return (
    <Container onClick={onClick}>
      <ResetIcon>
        <img alt="reset" src="/images/ic-reset-white.svg" />
      </ResetIcon>
      <Button bgColor="none" color={theme.GRAY_LIGHT_X1} weight={300}>
        {children}
      </Button>
    </Container>
  );
}

export default ResetButton;

const Container = styled.div`
  ${flex('', 'center')};
  column-gap: 10px;
  padding: 10px 20px 12px;
  border: 1.5px solid ${theme.ORANGE};
  border-radius: 30px;
  cursor: pointer;
`;

const ResetIcon = styled.div`
  width: 15px;
  height: 15px;
  ${fitImg};
`;
