import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';
import { fitImg, flex, theme } from 'styles';

interface ISearchBarProps {
  placeholder: string;
  title: string;
  onChange: (value: string) => void;
}

function SearchBar({ placeholder, title, onChange }: ISearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  // debounce 적용
  useEffect(() => {
    const timer = setTimeout(() => onChange(searchValue), 500);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <Container>
      <SearchIcon>
        <img alt="search" src="/images/ic-search.svg" />
      </SearchIcon>
      <Input>
        <Input.Value
          placeholder={placeholder}
          textAlign="left"
          title={title}
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
      </Input>
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  ${flex('', 'center')}
  position: sticky;
  top: 0;
  background: ${theme.BLACK};

  input {
    padding: 15px 40px;
    border: 1px solid ${theme.GRAY_LIGHT_X2};

    :hover {
      border: 1px solid ${theme.WHITE};
    }

    :focus {
      border: 1px solid ${theme.ORANGE};
    }
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  width: 15px;
  height: 15px;
  ${fitImg}
`;
