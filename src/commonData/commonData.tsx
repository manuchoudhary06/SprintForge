import { useEffect, useState } from 'react';
import type { Product } from '../tyepDefinitions/typeDefinitions';
export const useCommonData = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    const getProductList = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductList(data.products);
    };
    getProductList();
  }, []);

  return productList;
};
