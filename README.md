# REST-countries

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Pasos para la solución](#2-pasos-para-la-solución)
* [3. Producto Final](#3-producto-final)

***


## 1. Definición del producto

Este es un proyecto desarrollado en React que muestra un listado de países llamados desde la [API](https://restcountries.com/#api-endpoints-v2). Este proyecto está realizado en sintaxis jsx con JavaScript y CSS. Su estructura está realizada con 2 componentes de clase y 4 componentes de función.

- App.js : Es un componente de clase donde se realizó el ruteo con react-router-dom además de ser el componente principal allí se establece el estado principal del componente y se consumó la API con el método fetch(), también renderizamos la dar¿ta con el método de react componentDidMount()
- Countries.jsx : Es un componente de función donde se renderiza la data según la condición que indica si se ha cargado o no la misma, además de tener un componente hijo donde se estructura el formato que tendrá la data.
- Cards.jsx : Lleva la estructura que tendrán las tarjetas que se renderizan.

- Seeker.jsx: Es un Componente de clase donde se estructura el input (barra de búsqueda) y se toma su valor para filtrar función que se realiza desde el componente principal

- SelectFilter.jsx: Componente de Función donde se renderizan las regiones a través de un select (caja de opciones) y este valor seleccionado se toma para filtrar según la región y así renderiza de acuerdo a lo seleccionado.

- Details.jsx : Componente de función donde se renderiza de acuerdo al nombre del pais, se realizan funciones como getCountr() para obtener el pais, getBorders() para obtener los paises fronterizos, getLanguages() para obtener los lenguajes y getCurrencies() para obtener las monedas del país correspondiente.

- Header.jsx : se establece la estructura del header y se aplica función desde el componente padre para dar efecto darkmode.


## 2. Pasos para la solución

 1. Organización: Para tener una vision clara del proyecto realice un  planeación en trello que contenía toda la información correspondiente al proyecto y las historias de usuario.
 [Ver Planeación](https://trello.com/invite/b/2tPjOxRi/9791c28c5978ab2b088b06b06e7466e6/rest-countries)

 2. Investigación: Para desarrollar la aplicación se investigó temas relacionados con React como: metodos, componentes de clase y posibles librerias para el desarrollo.

## 2. Producto Final
[Video](https://reccloud.com/es/u/0nzz0fh)
