# :coat:Indumentaria Cassius

## Tabla de Contenidos
1. [Información General](#informacion-general)
2. [Caracteristicas](#características)
2. [Tecnologías](#tecnologías)
3. [Desarrolladores](#desarrolladores)
4. [Información Personal](#información-personal)

## Informacion General
*****************
* Este sitio web se encuentra en desarrollo y fue iniciado por fines educativos.
Este proyecto es basado en una tienda de indumentaria online, cuyo objetivo principal es permitir a los usuarios navegar a tráves de la variedad de productos ofrecidos y la compra de los mismos de forma sencilla y segura, registrando los datos en una base de datos de Firebase.

* En el futuro se procurara hacer mejoras, tales como la autenticación del usuario, registro e inicio de sesión; la posibilidad de que los usuario puedan visualizar compras anteriormente realizadas. Además de mayor especificidad en características con respecto al producto que sera agregado al carrito.

## Características
*****************
- Catálogo de productos: Los usuarios pueden explorar diferentes categorías de productos, como remeras y pantalones, y ver detalles de cada artículo.
- Carrito de compras: Los usuarios pueden agregar productos al carrito de compras, editar la cantidad de artículos, eliminar productos del carrito y cancelar la.
- Checkout: Los usuarios pueden proceder al checkout para finalizar su compra.

## Tecnologías
*****************
Lista de tecnologías utilizadas en este proyecto:
* [Vite](https://vitejs.dev/guide/): Version 4.3.9
* [Material Ui](https://mui.com/material-ui/getting-started/installation/): Versión 5.14.3
* [NodeJs](https://nodejs.org/en/download/): Versión 18.16.0
* [npm](https://www.npmjs.com/package/npm): Versión 9.5.1
* [React Router DOM](https://www.npmjs.com/package/react-router-dom): Version 6.14.2
* [Firebase](https://firebase.google.com/?hl=es-419): Version 10.1.0
* [Formik](https://formik.org/docs/overview): Version 2.4.2
* [Yup](https://www.npmjs.com/package/yup): Version 1.2.0
* [Sweetalert2](https://sweetalert2.github.io/#download): Version 11.7.20

## Dependencias
*****************
* Ademas de las dependencias básicas:
```
npm init
```
* **React Router DOM**
```
npm i react-router-dom
```
- **Vite** fue agregado para crear de forma más óptima y rápida el proyecto
```
npm create vite@latest
```

- **Material Ui** se utiliza en este proyecto para agregar elementos prehechos, optimizando así el tiempo y mejorando la visualización del sitio.
```
npm install @mui/material @emotion/react @emotion/styled
```
- **Formik**  implementado junto a **Yup** para facilitar y disminuir el tiempo que en caso de no usarse debería ser invertido en la creación del código necesario para la verificación de los formularios. Específicamente el formulario que se encuentra en el Checkout.
```
npm install formik --save
```
```
npm i yup
```

- **Sweetalert2** incluido para mejorar la visualización de toasts y alerts.
```
npm install sweetalert2
```

:warning: Es indispensable la lectura de la documentación de cada una de las dependencias mencionadas anteriormente para poder aplicar cambios adecuadamente.