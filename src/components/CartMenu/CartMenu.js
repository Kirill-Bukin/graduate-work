import React from "react";
import { calcTotalPrice } from "../../utils";
import { Button } from "../Button";
import { CartItem } from "../CartItem";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__film-list">
        {items.length > 0
          ? items.map((film) => (
              <CartItem
                key={film.title}
                price={film.price}
                title={film.title}
                id={film.id}
              />
            ))
          : "Корзина пустая"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} $</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
