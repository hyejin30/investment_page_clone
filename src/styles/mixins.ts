import { css } from 'styled-components';

export const fitImg = css`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Z_INDEX = {
  dropdown: 1,
  header: 2,
  dimmed: 3,
  modal: 4,
};
