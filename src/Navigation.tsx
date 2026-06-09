import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home';
import About from './components/About/About';
import ErrorPage from './components/ErrorPage/ErrorPage';
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
