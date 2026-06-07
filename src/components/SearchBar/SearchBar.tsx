import { Search } from 'lucide-react';
import type { SearchBarProps } from '../../tyepDefinitions/typeDefinitions';

const SearchBar = ({ searchText, setSearchText }: SearchBarProps) => {
  return (
    <div className="relative p-5">
      <Search
        size={18}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search projects..."
        className="w-[400px] rounded-md border border-gray-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
        value={searchText}
      />
    </div>
  );
};

export default SearchBar;
