import { MouseEvent } from 'react';
import styled, { css } from 'styled-components';

import { Input } from 'components/atoms';
import { theme } from 'styles';

interface ISelectInputProps {
  isSelect: boolean;
  placeholder?: string;
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function SelectInput(props: ISelectInputProps) {
  const { isSelect, onClick, ...restProps } = props;

  return (
    <StyledInput title={restProps.title} onClick={onClick}>
      <StyledInputValue readOnly {...restProps} />
      <Input.Right>
        <Arrow isSelect={isSelect}>
          <img
            alt="arrow down"
            src="https://hyejin30.github.io/investment_site_project/images/ic-arrow-down-orange.svg"
          />
        </Arrow>
      </Input.Right>
    </StyledInput>
  );
}

export default SelectInput;

type IArrowStyle = Pick<ISelectInputProps, 'isSelect'>;

const StyledInput = styled(Input)`
  cursor: pointer;
`;

const StyledInputValue = styled(Input.Value)`
  border: 1px solid ${theme.GRAY_LIGHT_X3};
  border-radius: 5px;
  cursor: pointer;

  :hover {
    border: 1px solid ${theme.WHITE};
  }

  :focus {
    border: 1px solid ${theme.ORANGE};
  }
`;

const Arrow = styled.div<IArrowStyle>`
  position: absolute;
  top: 12px;
  right: 30px;
  width: 10px;
  height: 10px;
  cursor: pointer;
  ${(props) => (props.isSelect ? ReverseArrow : '')};
`;

const ReverseArrow = css`
  img {
    transform: rotate(-180deg);
  }
`;
