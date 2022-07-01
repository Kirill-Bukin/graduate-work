import React, { useState } from 'react'
import './input.css';
import { AiOutlineSearch } from "react-icons/ai";

export const Input = ({ placeholder, data }) => {
  const [value, setValue] = useState('');
  return (
    <div className='search'>
        <div className='search__block'>
                <input
                type='text'
                placeholder={ placeholder }
                className='search__input'
                onChange={(e) => setValue(e.target.value)}
                />
                <div className='input__icon'>
                <AiOutlineSearch
        size={25}
        className="search__icon"
        onClick={""}
      />
                </div>
        </div>
    </div>
  )
}
