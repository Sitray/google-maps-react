# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts

En el proyecto puedes ejecutar:

Primero `npm install` para instalar el node modules y así tener todas las dependencias

luego para ejecutar el proyecto:

### `npm start`

La app se ejecuta(en el navegador) en:
[http://localhost:3000](http://localhost:3000) .

### `npm test`

Para ejecutar los test

# Ejercicio 1

En el _forEach_ la variable index no se está usando, a parte que causaría problemas con **service** haciendo que fuera undefined

ejemplo de como lo dejaría: ![image](https://user-images.githubusercontent.com/22580527/138442545-2bb338a6-7eaf-4e4a-b72b-1e6775212475.png)

Cambiaría el nombre de _service_ => _element_ ya que si llamámos a la función de la clase **Servicio** con el mismo nombre por el que iteramos el ForEach podría causar error.

Luego movería el tipo de servico: **Premium** a servicios junto al servicio de _Download_ y _Streaming_ para así tenerlo en el mismo fichero, ya que yo lo cuento como otro servicio añadido. Luego pasar el _additionalFee_ a la clase de **MultimediaContent** para tenerlo junto a los precios de las descargas y stream.

Una vez eso, he cambiado todo el statment de _if/else if_ por un **Switch** ya que a la larga si se le quieren añadir más casos es más fácil de hacer, será menos costoso para la aplicación y mucho más fácil de leer.

Queda tal que así:
![image](https://user-images.githubusercontent.com/22580527/138445160-f41c1567-8313-4979-bae1-748bba41c7f5.png)

En este caso no tendrá que pasar por cada if/else aunque el usuario solo tenga un servicio contratado.

# Ejercicio 2

Al final me he decantado por usar dos librerias de React. La primera, para hacer wrap del mapa de Google: _react-google-maps_ [https://www.npmjs.com/package/react-google-maps](https://www.npmjs.com/package/react-google-maps)

y otra para hacer el buscador y poder autocompletar las búsquedas: _react-places-autocomplete_ [https://www.npmjs.com/package/react-places-autocomplete](https://www.npmjs.com/package/react-places-autocomplete)

Lo he estructurado dividiéndolo en _4 componentes_.

1- El **MapContainer** el cuál es el encargado de tener la barrade búsqueda y el wrap del mapa para así po der mostrarlo.

2- El **Map** el componente el cuál usa la api de google para poder tener el mapa y el cuál se encargará más adelante de poner los marcadores de posición en el mapa.

3- El **InfoWindowMarker** es el componente que tiene el marcador, el cuál le llegan las props desde el componente mapa y así poder poner un _Marcador_ y un _Modal_ para ver en qué sitio te encuentras.

4- El componente **SearchBar** es el componente que se encarga de tener la barra de búsqueda y de mandar la información que necesitan los marcadores a la _Store_ de Redux.

**Redux**

He implementado la store con el combine reducer para que si en algún momento se tiene que añadir más reducers sea fácil.

Guardo el estado de los Markers en un array en la store de Redux con el _useDispatch_ una vez tengo los datos recogidos de la searchbar.

Una vez tengo el estado en el componente _maps_ lo recojo con el **useSelector** y así poder pasarle la información a los marcadores y mostrarlos en el mapa.
