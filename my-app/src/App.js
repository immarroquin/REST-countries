import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Seeker } from "./components/Seeker";
import { SelectFilter } from "./components/SelectFilter";
import "./App.css";
import { Countries } from "./components/Countries";
import { Details } from "./components/Details";

//coponente de clase
class App extends React.Component {

  //estado inicial del componente
  state = {
    regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
    countries: [],
    filtered: [],
    search: "",
    region: "",
    mode: "light",
    darkMode: false,
    isFetch: false,  //verificar que la data carego correctamente antes de renderizar
  };

  consultApi = () => {
    const url = "https://restcountries.com/v3.1/all/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let countriesData = Array.from(data); //el objeto es convertido a un array
        //actualizar estado con los paises
        this.setState({
          countries: countriesData,
          filtered: countriesData,
          isFetch: true,
        });
      })
      .catch((error) => {
      });
  };

  //Método de montaje, que solo se ejecuta en el lado del cliente una unica vez.
  componentDidMount() {
    this.consultApi();
  }

  dataFilter = (continent) => {
    //actualizar estado 
    this.setState(
      {
        region: continent,
      },
      () => this.filterCountries(this.state.countries)
    );
  };

  dataSearch = (term) => {
    this.setState(
      {
        search: term,
      },
      () => this.filterCountries(this.state.countries)
    );
  };

  filterCountries = (countries) => {
    ////Convertir el objeto en pares de un array [key, value];
    const asArray = Object.entries(countries);
    //Filtrar los paises
    const filtered = asArray.filter(([_, value]) => {
      //Comprobar si el nombre comienza con la busqueda
      let matchName = value.name.common
        .toLowerCase()
        .startsWith(this.state.search); 
      let condition =
        (matchName && value.region === this.state.region) ||
        (matchName && this.state.region === "");
      return condition;
    });
    //convertir los pares [key, value] en un array de valores
    let filteredCountries = filtered.map(([_, value]) => value);

    //actualizar estado
    this.setState({
      filtered: filteredCountries,
    });
    //retornar paises filtrados
    return filteredCountries;
  };

  toggleDarkMode = () => {
    //actualizar el estado con la condicion para el modo claro u oscuro
    this.setState({
      mode: this.state.mode === "light" ? "dark" : "light",
      darkMode: this.state.mode === "light" ? true : false,
    });
  };


  render() {
    return (
      <div className={`App ${this.state.mode}`}>
        <Header
          toggleDarkMode={this.toggleDarkMode}
          darkModeOn={this.state.darkMode}
        />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="container-80">
                  <div className="search-filters">
                    <Seeker dataSearch={this.dataSearch} />
                    <SelectFilter
                      width={200}
                      dataFilter={this.dataFilter}
                      regions={this.state.regions}
                    />
                  </div>
                  <Countries
                    countriesData={this.state.filtered}
                    isFetch={this.state.isFetch}
                  />
                </div>
              }
            />
            <Route
              exact
              path="/details/:name"
              element={
                <Details
                  isFetch={this.state.isFetch}
                  countriesData={this.state.countries}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
