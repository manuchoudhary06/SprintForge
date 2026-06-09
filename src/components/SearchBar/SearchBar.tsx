import { Search } from 'lucide-react';
import { useSearch } from '../../commonData/SearchContext';

const SearchBar = () => {
  const { searchText, setSearchText } = useSearch();

  return (
    <div className="relative p-5">
      <Search
        size={18}
        className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search products..."
        className="w-[400px] rounded-md border border-gray-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
