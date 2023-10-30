import { Presentation } from '@phosphor-icons/react';
import AddProduct from '../AddProduct';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ProductsHead from '../../../components/Product/ProductsHead';
import ProductCards from '../../../components/Product/card/ProductCards';

const PRODUCT_PER_PAGE = 2;

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortKey, setSortKey] = useState(sortOptions[0].value);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleSortSelect = (event) => {
    const newSortKey = event.target.value;
    setSortKey(newSortKey);
  };

  const handleSort = useCallback(
    (a, b) => {
      switch (sortKey) {
        case 'NEWSET':
          break;
        case 'OLDEST':
          break;
        case 'BY_SUBSCRIBERES':
          break;
        default:
      }
    },
    [sortKey]
  );

  const handlePage = (_, newPage) => {
    setPage(newPage);
  };

  const preparedProducts = useMemo(
    () => [...products].sort(handleSort).slice(),
    [products, handleSort]
  );

  return (
    <>
      <ProductsHead
        Form={AddProduct}
        ButtonIcon={Presentation}
        buttonText="Add Product"
        countTitle="Products"
        productCount={preparedProducts.length}
        sortKey={sortKey}
        handleSort={handleSortSelect}
        sortOptions={sortOptions}
      />

      <ProductCards
        data={preparedProducts}
        page={page}
        onPagination={handlePage}
        productPerPage={PRODUCT_PER_PAGE}
      />
    </>
  );
}

const sortOptions = [
  { value: 'DEFAULT', label: 'Default' },
  { value: 'NEWEST', label: 'Newest' },
  { value: 'OLDEST', label: 'Oldest' },
  { value: 'BY_SUBSCRIBERES', label: 'By Subscribers' },
];

const productsData = [
  {
    image: '',
    title: 'Dummy Product 1',
    category: 'Category 1',
    date: '2023-08-29',
    subscribersCount: 1200,
  },
  {
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 2',
    category: 'Category 2',
    date: '2023-08-30',
    subscribersCount: 800,
  },
  {
    image:
      'https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg',
    title: 'Dummy Product 3',
    category: 'Category 3',
    date: '2023-09-01',
    subscribersCount: 1500,
  },
];
