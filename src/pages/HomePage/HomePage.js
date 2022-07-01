import React from 'react'
import { FilmItem } from '../../components/FilmItem'
import { FILMS } from '../../components/Card'
import './home-page.css'

export const HomePage = () => {
  return (
    <div className='home-page'>
      { FILMS.map(film => <FilmItem film={film} key={film.id}/>)}
      </div>
  )
}
