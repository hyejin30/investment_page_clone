import { HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from 'components/atoms/Button/Button';
import Text from 'components/atoms/Text';

import { fitImg, theme, flex } from 'styles';

interface IResetButtonProps extends HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

function ResetButton({ children, onClick }: IResetButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      <ResetIcon>
        <img alt="reset" src="/images/ic-reset-white.svg" />
      </ResetIcon>
      <Text.Medium weight={300}>{children}</Text.Medium>
    </StyledButton>
  );
}

export default ResetButton;

const StyledButton = styled(Button)`
  ${flex('', 'center')}
  column-gap: 10px;
  padding: 15px 25px;
  background: none;
  border: 1px solid ${theme.orange};
  border-radius: 30px;
  color: ${theme.white};
`;

const ResetIcon = styled.div`
  width: 20px;
  height: 20px;
  ${fitImg};
`;
