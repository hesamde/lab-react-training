function Random ({ min , max }) {

    const byChance = min + Math.floor( Math.random() * max);
    // tasadofi bein 1 ta max ( Math.random() * max)
    //  tabdil be adadde sahih Math.floor()
    // min + is going to start min
    return (
      <div className="item">Random value between {min} and {max} = {byChance}</div>
    );
  }
  export default Random;