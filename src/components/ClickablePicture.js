import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);
  const [image, setImage] = useState(img);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setImage(isClicked ? img : imgClicked);
  };

  return (
    <div onClick={handleClick}>
    <img
      src={image}
      alt="dice 1 or 2"
      style={{
        width: '250px',
        height: '250px',
    }}
    />
  </div>
);
}

export default ClickablePicture;
