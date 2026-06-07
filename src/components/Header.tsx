import { Apple, ShoppingCart, UserRoundPen } from 'lucide-react';
import { useMemo } from 'react';
import { useCommonData } from '../commonData/commonData';

const Header = () => {
  const productList = useCommonData();

  const groupedProducts = useMemo(() => {
    return productList?.reduce(
      (acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }

        acc[product.category].push(product);

        return acc;
      },
      {} as Record<string, typeof productList>
    );
  }, [productList]);

  return (
    <header className="m-4 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Apple size={32} className="text-amber-600" />

          {Object.entries(groupedProducts).map(([category, products]) => (
            <select
              key={category}
              className="cursor-pointer border-none bg-transparent text-lg font-medium capitalize outline-none"
            >
              <option value="">{category}</option>

              {products?.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.title}
                </option>
              ))}
            </select>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <ShoppingCart className="cursor-pointer transition hover:scale-110" />
          <UserRoundPen className="cursor-pointer transition hover:scale-110" />
        </div>
      </div>
    </header>
  );
};

export default Header;
