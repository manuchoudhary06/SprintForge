import Cards from './Cards/Cards';
import type { BodyProps } from '../tyepDefinitions/typeDefinitions';
const Body = ({ searchText }: BodyProps) => {
  const stats = [
    {
      title: 'Today Orders',
      value: '124',
      change: '+12% from yesterday',
    },
    {
      title: 'Revenue',
      value: '$3,420',
      change: '+8% this week',
    },
    {
      title: 'Products Sold',
      value: '487',
      change: '+34 today',
    },
    {
      title: 'Low Stock Items',
      value: '6',
      change: 'Needs attention',
    },
  ];

  return (
    <div className="m-4">
      <Cards statistics={stats} searchText={searchText} />
    </div>
  );
};

export default Body;
