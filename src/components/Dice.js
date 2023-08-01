import { useState } from 'react';

import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const diceArray = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [dice, setDice] = useState(diceArray[Math.floor(Math.random() * 6) + 1]);

  function showDice() {
    setDice(diceArray[0]);
    const newDice = diceArray[Math.floor(Math.random() * 6) + 1];
    setTimeout(() => setDice(newDice), 400);
  }

      return (
    <div>
      <img
        onClick={() => showDice()}
        style={{ width: '300px', height: '300px', padding: '5px'  }}
        src={dice}
        alt=""
        />
    </div>
  );
};


export default Dice;