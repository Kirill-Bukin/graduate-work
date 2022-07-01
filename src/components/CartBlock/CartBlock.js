import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../CartMenu";
import { ItemsInCart } from '../ItemsInCart';
import { calcTotalPrice } from "../../utils/totalPrice";
import "./cart-block.css";


export const CartBlock = () => {
  const [isCartMenu, setIsCartMenu] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenu(false);
    navigate('/order');
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenu(!isCartMenu)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__prise"> {totalPrice} $</span>
      ) : null}
      {isCartMenu && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
