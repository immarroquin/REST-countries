# REST-countries

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Pasos para la solución](#2-pasos-para-la-solución)
* [3. Producto Final](#3-producto-final)

***


## 1. Definición del producto

Este es un proyecto desarrollado en React que muestra un listado de paises llamados desde la [API](https://restcountries.com/#api-endpoints-v2). Este proyecto esta relaizado en sintaxis jsx con JavaScript y CSS.
Su estrutura esta realizada con 2 componentes de clase y 4 componenetes de función.

- App.js : Es un componente de clase donde se realizo el routeo con react-router-dom ademas de ser el componente principal alli se establece el stado principal del componente y se consumo la API con el metodo fetch(), tambien renderizamos la dar¿ta con el metodo de react  componentDidMount()

- Countries.jsx : Es un componente de función donde se renderiza la data segun la condición que indica si se ha cargado o no la misma, ademas de tener un componente hijo donde se estructura el formado que tendra la data.

- Cards.jsx : Lleva la estrutura que tendran las tarjetas que se renderizan.

- Seeker.jsx: Es un Componente de clase donde se estrutura el input (barra de busqueda) y se toma su valor para filtrr función que se realiza desde el componente principal

- SelectFilter.jsx: Componene de Función donde se renderizan las regiones a traves de un select (caja de opciones) y este valor seleccionado se toma para filtrar segun la región y asi renderiza de acuerdo a lo seleccionado.

- Details.jsx : Componente de función donde se renderiza de acuerdo al nombre del pais, se realizan funciones como getCountr() para obtener el pais, getBorders() para obtener los paises fronterizos, getLanguages() para obtener los lenguajes y getCurrencies() para obtener las monedas del pais correspondiente.

- Header.jsx : se establece la estrutura del header y se aplica función desde el componente padre para dar efecto darkmode.

## 2. Pasos para la solución

 1. Organización: Para tener una vision clara del proyecto realice un  planeación en trello que contenía toda la información correspondiente al proyecto y las historias de usuario.
 [Ver Planeación](https://trello.com/invite/b/2tPjOxRi/9791c28c5978ab2b088b06b06e7466e6/rest-countries)

 2. Investigación: Para desarrollar la aplicación se investigó temas relacionados con React como: metodos, componentes de clase y posibles librerias para el desarrollo.

## 2. Producto Final
[Video](https://reccloud.com/es/u/0nzz0fh)
