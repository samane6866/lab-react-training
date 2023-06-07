import { useState } from 'react';

function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [likes, setLikes] = useState(0);
  //   const [indexColor, setIndexColor] = useState(0);

  function handelClick() {
    setLikes(likes + 1);
    // if (indexColor == colors.length - 1) {
    //   setIndexColor(0);
    // } else {
    //   setIndexColor(indexColor + 1);
    // }
  }

  return (
    <button
      style={{ backgroundColor: colors[likes % colors.length] }}
      onClick={handelClick}
    >
      {likes}like
    </button>
  );
}

export default LikeButton;

// <************************************+*******+++>
// este es un ejercisio de sandbox de carousel de images, tal como estamos utlizando mucho en difrentes proyectos, he puesto aqui para tener un ejemplo, basicamente he implementado un variable de estado con indice de images, que en este caso ahora esta a 0, para que funciona button prev y next hemos puesto dos evento de onClick que llevan una funcion cada estos buttons, en la funcion de handelClickPrev Y next estamos deciendo que indice+1 para que sigue a next images y en caso prev es setIndex(index-1), algo que es muy importante comprobar si llega a final de array de fotos debe volver a princioio si no, no sale ningun foto o es un erro, para resolver este problema  setIndex((index+1)%images.length);en la funcion de handelNextClick,"%images.length)"""

// import "./styles.css";
// import {useState} from "react";

// export default function App() {
//   return (
//     <div className="App">
//       <Carousel
//         images={[
//           "https://randomuser.me/api/portraits/women/1.jpg",
//           "https://randomuser.me/api/portraits/men/1.jpg",
//           "https://randomuser.me/api/portraits/women/2.jpg",
//           "https://randomuser.me/api/portraits/men/2.jpg"
//         ]}
//       />
//     </div>
//   );
// }

/**
 * Implementa este carousel de fotos en React. Olvida de CSS
 *
 * 1. Identifica la estructura de la variable 'images'
 * 2. OLVIDA los eventos. ¿Qué variable de estado necesitamos para almacenar cual es la foto que queremos mostrar?
 * 3. Inicializa la variable de estado adecuadamente y modifica el atributo src adecuadamente para que al inicio, veamos la primera foto del array images
 * 4. CAMBIA el valor de la variable de estado y comprueba que puedes visualizar las otras fotos del array
 * 5. SOLO ENTONCES, codifica los eventos. Sugiero empezar por el Click de 'Next'
 */

// function Carousel({ images }) {
//   const[index, setIndex]=useState(1)
//   function handelNextClick(){
//      setIndex((index+1)%images.length);
//   }
//   function handelPrevClick(){
//   if (index === 0) {
//     setIndex(images.length - 1);
//   } else {
//     setIndex(index - 1);
//   }
// //    
// //   }
//   return (
//     <div>
//       <button onClick={handelPrevClick}>Prev</button>
//       <img
//         src={images[index%images.length]}
//         alt="person"
//       />
//       <button onClick={handelNextClick}>Next</button>
//     </div>
//   );
// }

// <*********************************************+>




// slocion de oscar
// function Carousel({ images }) {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => {
//     // si ya estoy en el índice 0, no puedo al -1. Tengo que establecer la variable de estado con el último índice del array
//     if (index === 0) {
//       setIndex(images.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//   };

//   const handleNext = () => {
//     setIndex((index + 1) % images.length);
//   };

//   return (
//     <div>
//       <button onClick={handlePrev}>Prev</button>
//       <img src={images[index]} alt="person" />
//       <button onClick={handleNext}>Next</button>
//     </div>
//   );
// }

