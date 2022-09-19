import React, { useCallback, useEffect, useState } from 'react';
import { productApi } from '../api/productApi';
import { filterType } from 'api/productApi';
import { productType } from 'types/editPage/product.type';

export default function useGetFilter() {
  const [filterItem, setFilterItem] = useState<Array<productType>>([]);
  const [lastPage, setLastPage] = useState<number>(1);

  const getFilter = async (filter: filterType) => {
    try {
      const { data } = await productApi.getFilter({ params: filter });
      setFilterItem(data.products);
      setLastPage(data.lastPage);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    filterItem,
    getFilter,
    lastPage,
  };
}
