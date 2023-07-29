function BoxColor () {


    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return (
      <div className="item" style={{background:`rgb(${r},${g},${b})`}}>#{r}{g}{b}</div>
    );
  }
  export default BoxColor;