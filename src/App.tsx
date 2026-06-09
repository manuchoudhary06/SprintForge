import './App.css';
import Navigation from './Navigation';
import Header from './components/Header';
import { SearchProvider } from './commonData/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Header />
      <Navigation />
    </SearchProvider>
  );
}

export default App;
