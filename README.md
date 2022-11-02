# Z1 MUSIC PLAYER

## 🏁 Instalar e iniciar el proyecto

<p>&nbsp;</p>

Clona o descarga el repositorio, y ejecútalo en tu terminal usando en orden los siguientes comandos:

```bash
  yarn install
```

```bash
  yarn run dev
```

Una vez hecho esto, tendrás disponible el proyecto en `http://localhost:3000`

O también puedes ver la [➡️ **DEMO AQUÍ** ⬅️](https://inesgarper-front-end-challenge.vercel.app/)

<p>&nbsp;</p>

---

## ⚙️ Funcionalidades de la app

<p>&nbsp;</p>

- Mostrar la lista de canciones. ✅

- Reproducir cualquier canción seleccionada. ✅

- Pausar y volver a reproducir la canción en el punto en el que la dejaste, tanto desde el reproductor como desde la playlist. ✅
- Moverte entre las canciones de la playlist con las flechas del reproductor. ✅
- Modificar el minuto de reproducción desde la barra de progreso. ✅
- Marcar tus canciones favoritas de forma persistente (¡No se pierden al refrescar la página! 🙌🏻). ✅
<p>&nbsp;</p>

### Y además:

<p>&nbsp;</p>

- Puedes modificar la playlist filtrando y ordenando las canciones por nombre, autor o género. Todo esto se hace desde la API.

- ¡Las canciones son arrastrables! Puedes arrastrar la tarjeta de una canción hacia arriba o hacia abajo, y así cambiar el orden de reproducción de la playlist para personalizarla al máximo. (Gracias, [Framer](https://www.framer.com/docs/reorder/) 💙)
- Si la canción termina, se reproduce la siguiente de forma automática. Si la canción es la última de la playlist, al terminar vuelve a reproducir la primera.
- La web es full responsive. Como ya la había diseñado en Desktop first, modifiqué el util que gestiona las media queries para que fuera max-width y poder aprovecharlo ✌🏻
- He añadido un par de lotties, concepto totalmente desconocido para mí hasta hace dos semanas. Después de investigar varias alternativas, me decanté por [lottie-react de LottiesFiles](https://github.com/LottieFiles/lottie-react), ya que me permitía implementar todo lo que necesitaba de forma bastante sencilla para lo novata que soy en animaciones.
<p>&nbsp;</p>

---

## 🔜 Tareas pendientes:

<p>&nbsp;</p>

- **Accesibilidad**: Por desgracia es un tema que no controlo mucho y necesito investigar 😔

- **Estilos del dropdown y el input de tipo range**: Me he estado pegando con ellos, pero no he logrado que el resultado sea parecido al diseño original y lamentablemente necesitaba invertir el tiempo en otras tareas. Espero poder lograrlos más adelante con más calma.
- **Tests y Storybook**: Ambos me pillaban completamente de nuevas, como muchas de las tecnologías del proyecto, y estas dos han tenido que ser tristemente sacrificadas por falta de tiempo. En el caso de los tests, sí que había realizado alguno con Jest para el backend, pero nunca he testeado un componente. Ojalá poder dejar de decir esto muy pronto.

Estoy segura de que hay muchas más cosas que mejorar, por supuesto. Al fin y al cabo, esta no deja de ser **la primera prueba técnica de mi vida**. Han sido dos semanas muy intensas en las que la inseguridad y la inexperiencia me han hecho dudar en algún momento si conseguiría entregar un ejercicio decente. Pero aquí estoy dos semanas más tarde, con un reproductor de audio funcional, en un stack prácticamente nuevo para mí.

Y lo mejor de todo, también me llevo una lista gigante de aprendizajes ⬇️ ⬇️ ⬇️

<p>&nbsp;</p>

---

## 💪🏻 Aprendizajes

<p>&nbsp;</p>

- **yarn**: Quizás parece una tontería, pero para alguien prácticamente recién salido de un Bootcamp y sin experiencia laboral como developer, tirar un `npm install` y ver toda la consola en rojo, asusta y mucho. Todavía no he iniciado el proyecto y ya da error. Empezamos bien. Menos mal que todo quedó en una anécdota cuando descubrí que era culpa de 'la dependencia' `$`, que me obligó a instalar yarn en mi equipo para que eso tirase, pero me ha dejado unas importaciones preciosas en todo el proyecto 💅🏻

- **Next.js**: Bueno, una vez levantado el proyecto, tocaba meterse en faena. La faena: averiguar qué es Next. 8 horas de vídeo de Midudev y un rato leyendo documentación más tarde, había cumplido mi objetivo. O por lo menos tenía el conocimiento de Next.js suficiente para afrontar la prueba.
- **GraphQL**: ¡Por fin algo familiar! En verano desarrollé un servidor de GraphQL para un proyecto personal y una semana antes de empezar esta prueba estaba inicializando el cliente de Apollo, así que pensaba que esto estaría chupado. Lo que parecía sencillo se complicó cuando probé a implementar `useQuery` para hacer la llamada a la API. Un linter chivato me estaba diciendo que no podía hacerlo dentro de una función cualquiera. Debía ser un hook de React. Y así nacío mi primer custom hook. Acostumbrada a crear métodos para hacer las llamadas a la API y ejercutarlos dentro de un useEffect, como hacíamos en el Bootcamp, me chocó bastante no poder usar el custom hook ahí dentro también. Estuve un buen rato para averiguar que cada vez que el valor de alguno de los argumentos (search o sort) se actualizaba, se ejecutaba una nueva llamada. ¿Magia? No lo sé, pero desde ese momento soy fan de useQuery.
- **Estructura de archivos, TypeScript y styled-components**: Como comentaba, muchos de los problemas que he tenido han sido en parte por no estar familiarizada con approachs diferentes a los vistos en el Bootcamp. Pero contradictoriamente, gracias al starter code de esta misma prueba y su estructura de archivos, he encontrado una guía sobre cómo utilizar TypeScript o styled-components (a pesar de tener muy poquita experiencia en esas tecnologías), o cómo separar la lógica y los estilos en un componente. Siento que enfrentarme a esta prueba me ha permitido acercarme a un entorno real y de calidad, que va a llevar mis proyectos a un siguiente nivel. Así que siempre voy a estar agradecida por esta oportunidad ✨
- **Planificación**: Ahora que el stack estaba más o menos controlado, llegaba el momento de implementar la lógica del reproductor. Aquí quiero destacar la importancia de una buena planificación, ya que la mala me ha hecho refactorizar el código un par de veces 😅

  Como era mi primera vez desarrollando un reproductor de audio, quise hacer unas pruebas antes de ponerme con el proyecto para tener claro el flujo que debía seguir. Hardcodeé una pequeña lista de canciones y me puse manos a la obra.

  Cuando parecía que ya lo tenía y me puse a implementarlo con la lista de canciones real, todo parecía ir bien. La alegría duró lo que tardé en hacer el primer filtrado. **Primer imprevisto**: no había tenido en cuenta que la playlist CAMBIA. Cada vez que la playlist se filtraba o se reordenaba, la `currentSong`, cambiaba y empezaba a reproducirse. Creedme, no querríais haber oído eso.

  La mejor manera que encontré de solucionarlo fue teniendo dos playlists: una fija, con todas las canciones ordenadas siempre igual, asociada a la lógica del reproductor de audio, y otra dinámica asociada a la playlist cambiante. Cada vez que clickase en una canción de la playlist dinámica, esa canción se buscaría en la playlist fija y sonaría en el reproductor. ¿Fácil, no? Pues se viene el...

  **Segundo imprevisto**: al ser dos playlist distintas con instancias de canciones distintas, la canción de la playlist fija y la de la playlist dinámica no se podían comparar. Tocaba refactorizar de nuevo para hacer las comparaciones y búsquedas en base a sus IDs en ambas playlists. De esta forma, todo empezó a encajar 💪🏻
  <p>&nbsp;</p>

---

<p>&nbsp;</p>

Ojalá la lista de aprendizajes pueda seguir creciendo de la mano de Z1. Pero independientemente de lo que pase, el valor que me habéis aportado invitándome a hacer esta prueba es incalculable. Me siento mucho mejor desarrolladora que hace 2 semanas. Mil gracias, equipo 💙
