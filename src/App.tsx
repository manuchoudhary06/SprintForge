import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';
function App() {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="p-4">
      <Header />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Body searchText={searchText} />
    </div>
  );
}

export default App;
