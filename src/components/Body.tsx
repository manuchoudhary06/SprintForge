import Cards from './Cards/Cards';
const Body = () => {
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
    <div className="border border-gray-300 p-4 m-4">
      <Cards statistics={stats} />
    </div>
  );
};

export default Body;
