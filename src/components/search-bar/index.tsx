import { useState } from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
};

const SearchBar = ({ setSearch }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchValue('');
    setSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative text-gray-600">
        <input
          className="bg-lightgray h-[32px] px-5 pr-16 rounded-full text-sm focus:outline-none"
          type="text"
          name="search"
          placeholder="Search"
          autoComplete="off"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="absolute right-0 top-0 mt-[6px] mr-4">
          <Search size={20} className="text-white/50" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
