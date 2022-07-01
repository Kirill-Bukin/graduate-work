import React from "react";
import "./film-cover.css";

export const FilmCover = ({ image = "" }) => {
  return (
    <div className="film-cover" style={{ backgroundImage: `url(${image})` }} />
  );
};
