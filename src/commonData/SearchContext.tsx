import { createContext, useContext, useState } from 'react';
import type { SearchContextType } from '../tyepDefinitions/typeDefinitions';

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearch must be used inside SearchProvider');
  }

  return context;
};
