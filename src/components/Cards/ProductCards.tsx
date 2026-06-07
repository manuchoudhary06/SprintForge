import { useCommonData } from '../../commonData/commonData';
import type { ProductCardsProps } from './../../tyepDefinitions/typeDefinitions';
const ProductCards = ({ searchText }: ProductCardsProps) => {
  const productList = useCommonData();

  const filteredProducts = productList?.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full object-cover"
          />

          <div className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                {product.category}
              </span>

              <span className="text-sm font-medium">⭐ {product.rating}</span>
            </div>

            <h3 className="line-clamp-2 text-lg font-semibold">
              {product.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm text-gray-500">
              {product.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">${product.price}</p>

                <p className="text-sm text-green-600">
                  {product.discountPercentage}% OFF
                </p>
              </div>

              <button className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
