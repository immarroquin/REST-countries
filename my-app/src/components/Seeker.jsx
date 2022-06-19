import React from "react";
import debounce from 'lodash.debounce';  


//componente de clase
class Seeker extends React.Component {
  constructor(props) {
    super(props);
    this.searchRef = React.createRef();
    this.emitChangeDebounced = debounce(this.emitChange, 10); //debounce espera unos milisegundos para que la funcion dea invocada, retraso para que la aplicación reaccione
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillUnmount = () => { //Este método es llamado cuando un componente se elimina del DOM
    this.emitChangeDebounced.cancel(); //cancel es un metodo de la libreria lodash.debounce
  }

  handleChange = (event) => {
    event.preventDefault();
    this.emitChangeDebounced(event.target.value);
    //tomar el valor del input
    let term = this.searchRef.current.value;
    //se envia al componente principal
    this.props.dataSearch(term);
  };
   
  emitChange = (value) => { //llama a la función que se le envia al componente principal
    this.props.dataSearch(value);
  }

  render() {
    return (
      <form className="search">
        <ion-icon name="search-outline"></ion-icon>
        <input
          type="text"
          className="search-input"
          ref={this.searchRef}
          defaultValue={this.props.value}
          onChange={this.handleChange}
          placeholder="Search for a country..."
        />
      </form>
    );
  }
}
export { Seeker };
