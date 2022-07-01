import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemInCart, deleteItemFromCart } from '../../store/cart/slice';
import { Button } from '../Button'
import './film-buy.css';

export const FilmBuy = ({ film }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === film.id);
  const handleClick = (e) => {
      e.stopPropagation();
      if( isItemInCart ) {
        dispatch(deleteItemFromCart(film.id));
      }else {
        dispatch(addItemInCart(film));
      }
  }

  return (
    <div className='film-buy'>
        <span className='film-buy__price'>{film.price} $</span>
        <Button 
            type={ isItemInCart ? 'secondary' : 'primary'  }
            onClick={ handleClick }>
          { isItemInCart ? 'Убрать из корзины' : 'В корзину' }
        </Button>
    </div>
  )
}
