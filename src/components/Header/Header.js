import React from 'react'
import { Link } from 'react-router-dom'
import { CartBlock } from '../CartBlock'
import { Input } from '../Input'
import './header.css'


export const Header = () => {
  return (
    <div className='header'>
        <div className='wrapper'>
            <Link to='/' className='wrapper__header-title'>
                Best Films
            </Link>
        </div>
          <div className='wrapper__header-input'>
              <Input placeholder="Название фильма..."/>
          </div>
            <div className='wrapper__header-btn'>
                <CartBlock/>
            </div>
    </div>
  )
}
