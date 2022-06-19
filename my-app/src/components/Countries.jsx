import React from "react";
import { Cards } from "./Cards";

//componente de función
const Countries = (props) => {
  const { countriesData, isFetch } = props;

  const renderCountries = (countriesData) => {
   return countriesData.map((_, index) => { 
      return ( //mapear la data para renderizar por cada elemento en el componenete Cards 
        <Cards
          key={`card_${index}`}
          index={index}
          flag={countriesData[index].flags.svg}
          name={countriesData[index].name.common}
          capital={countriesData[index].capital}
          region={countriesData[index].region}
          population={countriesData[index].population}
        />
      );
    });
  };

  if (isFetch) { //Renderiza de acuerdo a la condición 
    if (countriesData.length > 0) {
      return (
        <div className="container-80">
          <div className="container-grid">{renderCountries(countriesData)}</div>
        </div>
      );
    } else {
      return (
        <div className="container-80">
          <h2>No se encontraron resultados</h2>
        </div>
      );
    }
  } else {
    return (
      <div className="container-80">
        <h2>Cargando ...</h2>
      </div>
    );
  }
};
export { Countries };
