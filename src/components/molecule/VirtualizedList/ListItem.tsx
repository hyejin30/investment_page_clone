import { MouseEvent } from 'react';
import styled from 'styled-components';

import { Text } from 'components/atoms';

import { theme } from 'styles';
import { IStock } from 'types/allocation';

interface IListItemProps<T> {
  data: T;
  style: any;
  title: string;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

function ListItem<T extends IStock>({ data, style, title, onClick }: IListItemProps<T>) {
  const renderText = () => {
    if (typeof data === 'string') return data;
    return data.label;
  };
  return (
    <Container style={style} title={title} onClick={onClick}>
      <Text.Regular weight={300}>{renderText()}</Text.Regular>
    </Container>
  );
}

export default ListItem;

const Container = styled.li`
  padding: 15px 0;
  color: ${theme.WHITE};
  cursor: pointer;
`;
