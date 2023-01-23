import { FC, MouseEvent, useCallback } from 'react';
import { List as _List, ListProps } from 'react-virtualized';

import ListItem from './ListItem';
import { IStock } from 'types/allocation';

const List = _List as unknown as FC<ListProps>;

interface IVirtualizedListProps<T> {
  rows: T[];
  title: string;
  onItemClick: (e: MouseEvent<HTMLLIElement>) => void;
}

function VirtulizedList<T extends IStock>({ rows, title, onItemClick }: IVirtualizedListProps<T>) {
  const rowRenderer = useCallback(
    ({ index, key, style }: any) => {
      const data = rows[index];
      return <ListItem key={key} data={data} style={style} title={title} onClick={onItemClick} />;
    },
    [rows],
  );

  return <List height={420} list={rows} rowCount={rows.length} rowHeight={50} rowRenderer={rowRenderer} width={640} />;
}

export default VirtulizedList;
