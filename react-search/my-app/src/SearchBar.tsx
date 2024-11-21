import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

type searchBarProps = {
  search: string;
  onType: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ search, onType }: searchBarProps) {
  return (
    <>
      <FaSearch></FaSearch>
      <label>
        <input value={search} onChange={(e) => onType(e)}></input>
      </label>
    </>
  );
}
