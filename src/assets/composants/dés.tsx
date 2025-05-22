import React, { useState, useEffect } from 'react';
import Popup from './jeux-html/pop-up-html';

/* const DiceRoller: React.FC = () => {
  const [dice, setDice] = useState<number | null>(null);
  const [movesLeft, setMovesLeft] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDice(result);
    setMovesLeft(result);
    setShowPopup(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (movesLeft !== null && movesLeft > 0) {
        setMovesLeft((prev) => (prev !== null ? prev - 1 : null));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movesLeft]);

  useEffect(() => {
    if (movesLeft === 0) {
      setShowPopup(true);
    }
  }, [movesLeft]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Lanceur de dés</h1>
      <button onClick={rollDice}>Lancer le dé 🎲</button>
      {dice !== null && <h2>Résultat : {dice}</h2>}
      {movesLeft !== null && <h3>Mouvements restants : {movesLeft}</h3>}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}; 


export default DiceRoller; */



type DiceRollerProps = {
  onRoll: (result: number) => void;
};

const DiceRoller: React.FC<DiceRollerProps> = ({ onRoll }) => {
  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    onRoll(result);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={rollDice}>🎲 Lancer les dés</button>
    </div>
  );
};

export default DiceRoller;


