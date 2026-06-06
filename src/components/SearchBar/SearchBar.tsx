import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search projects..."
        className="w-[400px] rounded-md border border-gray-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
