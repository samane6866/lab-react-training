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
