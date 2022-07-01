import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FilmCover } from '../FilmCover';
import { FilmBuy } from '../FilmBuy';
import { FilmGenre }  from '../FilmGenre';
import { setCurrentFilm } from "../../store/films/slice";
import "./film-item.css";




export const FilmItem = ({ film }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const  handleClick = () => {
    dispatch(setCurrentFilm(film));
    navigate(`/app/${film.title}`);
  }
  return (
    <div className="film-item" onClick={ handleClick }>
      <FilmCover image={film.image} />
      <div className="film-item__details">
        <span className="film-item__title">{film.title}</span>
        <div className="film-item__genre">
          {film.genres.map((genre) => <FilmGenre genre={genre} key={genre}/>)}
        </div>
        <div className="film-item__buy">
          <FilmBuy film ={ film } />
        </div>
      </div>
    </div>
  );
};
