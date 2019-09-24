import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

const ShopHeader = ({ itemsTotal, orderTotal }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Bookstore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {itemsTotal} items (${orderTotal})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({shoppingCart:{itemsTotal, orderTotal}}) =>
    ({itemsTotal, orderTotal});

export default connect(mapStateToProps, null)(ShopHeader);
