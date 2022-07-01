import React from 'react'
import { useDispatch } from 'react-redux';
import { FilmCover } from '../../components/FilmCover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './order-item.css'
import { deleteItemFromCart } from '../../store/cart/slice';

export const OrderItem = ({film}) => {
const dispatch = useDispatch();
const handleClick = () => {
  dispatch(deleteItemFromCart(film.id));
}
    
  return (
    <div className='order-item'>
        <div className='order-item__cover'>
            <FilmCover image={film.image}/>
        </div>
        <div className='order-item__title'>
            <span>{film.title}</span>
        </div>
        <div className='order-item__price'>
            <span>{film.price} $</span>
            <AiOutlineCloseCircle 
            color='brown'
            size={25} 
            className='cart-item__delete-icon'
            onClick={handleClick}/>
        </div>
    </div>
  )
}
