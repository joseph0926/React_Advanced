import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const { strDrinkThumb, strDrink, idDrink, strInstructions, strGlass } = cocktail;

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb}></img>
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strInstructions}</p>
        <Link to={`cocktail/${idDrink}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
