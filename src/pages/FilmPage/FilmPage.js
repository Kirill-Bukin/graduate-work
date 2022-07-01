import React from 'react'
import { useSelector } from 'react-redux'
import { FilmBuy } from '../../components/FilmBuy';
import { FilmCover } from '../../components/FilmCover';
import { FilmGenre } from '../../components/FilmGenre';
import './film-page.css'

export const FilmPage = () => {
    const film = useSelector(state => state.film.currentFilm);
    if(!film) return null;

  return (
    <div className='film-page'>
        <h1 className='film-page__title'>{film.title}</h1>
        <div className='film-page__content'>
            <div className='film-page__left'>
                <iframe
                    width= '90%'
                    height= '400px'
                    src={film.video}
                    title='YouTube Video Player'
                    frameBorder='0'
                    >
                </iframe>
            </div>
            <div className='film-page__right'>
                <FilmCover image={film.image}/>
                <p>{film.description}</p>
                <p className='secondary-text'>Жанры:</p>
                { film.genres.map((genre) => <FilmGenre genre={genre} key={genre}/>)}
                <div className='film-page__buy-film'>
                    <FilmBuy film={film}/>
                </div>
            </div>
        </div>
    </div>
  )
}
