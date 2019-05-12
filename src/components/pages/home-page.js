import React from 'react';
import ShoppingCartTable from '../shopping-cart-table/shopping-cart-table';
import BookListContainer from "../book-list/book-list";

const HomePage = () => {
  return (
    <div>
      <BookListContainer />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
