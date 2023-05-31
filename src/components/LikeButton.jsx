
// Una manera de fer-ho (la menys maca):

/* import { useState } from 'react';
 
export default function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
 
  const [likes, setLikes] = useState(0);
  const [indexColor, setIndexColor] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
    if (indexColor == colors.length - 1) {
      setIndexColor(0);
    } else {
      setIndexColor(indexColor + 1);
    }
  }
 
  // Calcular esta variable que me dice que índice de color toca, en función del estado
  return (
    <button
      style={{ backgroundColor: colors[indexColor] }}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
  );
} */


// Una altra manera de fer-ho:

/* import { useState } from 'react';
 
export default function LikeButton() {
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
 
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
  // cuando capturemos el evento click, ejecutamos la función handleClick
  console.log('indice siguiente:', likes % colors.length);
  return (
    <button
      style={{ backgroundColor: colors[likes % colors.length] }}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
  );
} */
