# Actividades

Hola, bienvenidos a la sección de ejercicios de React Advanced!\
En esta oportunidad estaremos agregandole funciones y mejoras a una app que he preparado. Actualmente la app no funciona bien y tiene problemas de rendimiento, asi que tu tarea será mejorarla y dejarla en funcionamiento.

Aqui tienes tu hoja de ruta:

## 1) Cambio de Theme o Tema desde 'Navbar'

Debes implementar el cambio de theme o tema de la app utilizando el boton del componente `Navbar`.
Para esto debes utilizar el hook **useContext** y un **custom hook** que devuelva el tema y una funcion para cambiar el tema. En el codigo verás los comentarios del uso del hook.
Crea el contexto y el custom hook dentro de un archivo ubicado en `/context/ThemeContext` y no olvides utilizar englobar tu app en el contexto.

## 2) Optimización del 'Componente Pesado'

El componente `ExpensiveCalculationComponent` realiza un calculo muy demandante para nuesta app: lo que hace es ejecutar la funcion `generatePrimes()` la cual calcula los numeros primos entre 0 y 50.000.
Al clickear un botón estamos disparando un re-render generando que se vuelva a realizar el cálculo.
¿Recuerdas cómo hacer para almacenar resultados de funciones en memoria?

## 3) Refactorizacion de la 'Calculadora'

Actualmente nuestro componente `Calculator` funciona correctamente, pero nos han pedido refactorizarla utilizando el hook **useReducer** para hacer un codigo más escalable ya que en un futuro quieren implementar más cálculos.
Recuerda utilizar la sintaxis del **switch** de Redux!

## 4) Funcionalidad del componente 'Caja de colores'

El componente `AnimatedComponent` está armado y listo para que le agreguemos funcionalidad. No han pedido que al clickear en el botón se cambie el color de la caja de la izquierda.
Nos han pedido que utilicemos el hook `useRef` para lograrlo.
