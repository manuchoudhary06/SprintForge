import { Cookie, UserRoundPen } from 'lucide-react';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  const desserts = [
    { id: 1, name: 'Cakes' },
    { id: 2, name: 'Cookies' },
    { id: 3, name: 'Shakes' },
  ];
  return (
    <div className="flex justify-between items-center border border-gray-300 p-4 m-4">
      <div className="flex justify-between ">
        <div className="flex">
          <h1 className="mr-4">
            <Cookie />
          </h1>
          <ul className="flex justify-center">
            <li>
              <select name="dropdown1" id="options">
                {desserts.map((dessert) => (
                  <option key={dessert.id} value={dessert.id}>
                    {dessert.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <select name="dropdown1" id="options">
                {desserts.map((dessert) => (
                  <option key={dessert.id} value={dessert.id}>
                    {dessert.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <select name="dropdown1" id="options">
                {desserts.map((dessert) => (
                  <option key={dessert.id} value={dessert.id}>
                    {dessert.name}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </div>
      <SearchBar />
      <div>
        <UserRoundPen />
      </div>
    </div>
  );
};

export default Header;
