import { useState } from 'react'

const Carousel = ({images}) => {
const [imageNumber , setImgage] = useState(0);

const preImg = () => {
                        setImgage(imageNumber - 1);}
const nextImg = () => {
                        setImgage(imageNumber + 1);}

    return (
        <article>
            <img src={images[imageNumber % images.length]} alt="" />
            <div>
                <button onClick={preImg} style={{ marginRight: '10px' }}>👈</button>
                <button onClick={nextImg} style={{ marginLeft: '10px' }}>👉</button>
            </div>
      </article>
    );
  }

  export default Carousel;

