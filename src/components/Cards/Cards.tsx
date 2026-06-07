import type { CardsProps } from '../../tyepDefinitions/typeDefinitions';
import {
  ShoppingBag,
  DollarSign,
  Croissant,
  AlertTriangle,
} from 'lucide-react';
const iconMap = {
  'Today Orders': ShoppingBag,
  Revenue: DollarSign,
  'Products Sold': Croissant,
  'Low Stock Items': AlertTriangle,
};

import ProductCards from './ProductCards';
const Cards = ({ statistics, searchText }: CardsProps) => {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {statistics.map((stat) => {
          const Icon = iconMap[stat.title as keyof typeof iconMap];

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h2>

                  <p className="mt-2 text-sm text-emerald-600">{stat.change}</p>
                </div>

                <div className="rounded-xl bg-amber-50 p-3">
                  <Icon className="h-5 w-5 text-amber-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ProductCards searchText={searchText} />
    </>
  );
};

export default Cards;
