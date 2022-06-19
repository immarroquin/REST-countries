import React from "react";
import { Link, useParams } from "react-router-dom";

const Details = (props) => {
  const { countriesData, isFetch } = props;
  const { name } = useParams(); // para crear ruta con el nombre del pais

  const getCountry = (countries) => {
    // obtener pais
    const asArray = Object.entries(countries);
    //filtrar lista de paises
    const filtered = asArray.filter(([_, value]) => {
      return value.name.common === name;
    });
    // convertir nuestro valores key y value en un array de valores solo value
    let country = filtered.map(([_, value]) => value);
    return country[0];
  };

  const country = getCountry(countriesData); // se aplica la función a la data

  const mapPro = (property) => {
    if (property !== null || property !== undefined) {
      if (typeof property === "object") {
        const asArray = Object.entries(property);
        const filtered = asArray.map(([_, value]) => {
          return value;
        });
        return filtered;
      } else {
        return [];
      }
    }
  };

  const getBorders = (object) => {
    //obtener paises frontetizos
    const borderCode = mapPro(object);
    const countriesArray = Object.entries(countriesData);
    const filtered = countriesArray.filter(([key, country]) =>
      borderCode.includes(country?.cca3)
    );
    const names = filtered.map(([key, value]) => value?.name?.common);
    const borders = names.map((name, key) => {
      return (
        <Link className="App-link" to={`/details/${name}`} key={`${name}`}>
          <button key={`${name}_border_${key}`} className="light-button">
            {name}
          </button>
        </Link>
      );
    });
    return borders;
  };
//obtener lenguajes del pais
  const getLanguages = (object) => {
    const languages = mapPro(object);
    var output = "";
    for (let i = 0; i < languages.length; i++) {
      output += languages[i];
      if (i < languages.length - 1) {
        output += ", ";
      }
    }
    return output;
  };

  //obtener modenas del pais
  const getCurrencies = (object) => {
    const currencies = mapPro(object);
    const currenciesArray = currencies.map((currency) => currency.name);
    var output = "";
    for (let i = 0; i < currenciesArray.length; i++) {
      output += currenciesArray[i];
      if (i < currenciesArray.length - 1) {
        output += ", ";
      }
    }
    return output;
  };

  if (isFetch && countriesData !== null && country !== undefined) {
    //validar que la pagina a cargado
    return (
      <div>
        <div className="container-80">
          <Link className="App-link" to="/">
            <button className="light-button back-button">
              <ion-icon name="arrow-back-outline"></ion-icon>
              <p>Back</p>
            </button>
          </Link>
        </div>
        <div className="container-80">
          <div className="container-double">
            <div className="image">
              <img src={country.flags.svg} alt={name + "flag"} />
            </div>
            <div className="description">
              <h1>{name}</h1>
              <div className="info">
                <p>
                  <b>Native Name: </b>
                  {
                    country.name.nativeName[
                      Object.keys(country.name.nativeName)[0]
                    ].official
                  }
                </p>
                <p>
                  <b>Population: </b>
                  {Number(country.population).toLocaleString("en-US")}
                </p>
                <p>
                  <b>Region: </b>
                  {country.region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {country.subregion}
                </p>{" "}
                <p>
                  <b>Capital: </b>
                  {country.capital}
                </p>
              </div>
              <div className="info">
                <p>
                  <b>Top Level Domain: </b>
                  {country.tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {getCurrencies(country.currencies)}
                </p>
                <p>
                  <b>Languages: </b>
                  {getLanguages(country.languages)}
                </p>{" "}
                <p>
                  <b>Capital: </b>
                  {country.capital}
                </p>
              </div>
              <div className="borders">
                <p>
                  <b>Borders Countries: </b>
                  {getBorders(country.borders)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-80">
        <h2>Cargando...</h2>
      </div>
    );
  }
};
export { Details };
