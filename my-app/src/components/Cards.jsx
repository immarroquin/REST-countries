import React from "react";
import { Link } from "react-router-dom";

//componente de función donde se estructuran las tarjetas del home
const Cards = (props) => {
  const { index, flag, name, population, region, capital } = props;

  return (
    <Link className="App-link" to={`/details/${name}`}>
      <div className="card" title={index}>
        <div className="image-container">
          <img src={flag} alt={name + "flag"} className="image" />
        </div>
        <div className="details">
          <div className="title">
            <h2>{name}</h2>
          </div>
          <p>{`Population: ${Number(population).toLocaleString("en-US")}`}</p>
          <p>{`Region: ${region}`}</p>
          <p>{`Capital: ${capital}`}</p>
        </div>
      </div>
    </Link>
  );
};
export { Cards };
