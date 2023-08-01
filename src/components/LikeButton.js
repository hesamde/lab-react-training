import { useState } from 'react';

function LikeButton() {
  const colors = ['purple','blue','green','yellow','orange','red'];
  const [color, setColor] = useState('')
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newColor = Math.floor(Math.random() * colors.length);
    setCount(count + 1);
    setColor(colors[newColor]);
  };

  return (
    <div>
      <button
        className="btn-like"
        style={{ backgroundColor: color }}
        onClick={handleClick}>Likes {count}
      </button>
    </div>
  );
}

export default LikeButton;
