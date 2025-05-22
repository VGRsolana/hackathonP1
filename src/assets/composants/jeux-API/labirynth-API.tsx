import { Stage, Layer, Rect, Circle } from 'react-konva';
import React, { useEffect, useState } from 'react';
import DiceRoller from '../dés.tsx';
import Popup from './pop-up-API.tsx';


const CASE_SIZE = 50;
const NB_LIGNES = 10;
const NB_COLONNES = 15;

const grille = [
    ['start', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path'],
    ['wall',  'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'end'],
  ];
  

const couleursParType = {
  wall: '#444',
  path: '#eee',
  start: '#4caf50',
  end: '#f44336',
  bonus: '#FFFF00'
};

const trouverPositionDepart = () => {
  for (let y = 0; y < NB_LIGNES; y++) {
    for (let x = 0; x < NB_COLONNES; x++) {
      if (grille[y][x] === 'start') {
        return { x, y };
      }
    }
  }
  return { x: 0, y: 0 };
};

const Labyrinthe1 = () => {
  const [perso, setPerso] = useState(trouverPositionDepart());
  const [mouvementsRestants, setMouvementsRestants] = useState(0);
  const [dernierLancer, setDernierLancer] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [nbErreurs, setNbErreurs] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);

  const handleLancer = (resultat: number) => {
    setMouvementsRestants(resultat);
    setDernierLancer(resultat);
    setShowPopup(false);
    setNbErreurs((prev) => prev); // ne reset pas, sauf si tu veux
  };

  const handleWrongAnswer = () => {
    setNbErreurs((prev) => prev + 1);
  };

  const deplacer = (dx: number, dy: number) => {
    const newX = perso.x + dx;
    const newY = perso.y + dy;
    const typeCase = grille[newY]?.[newX];

    const estValide =
      newX >= 0 &&
      newX < NB_COLONNES &&
      newY >= 0 &&
      newY < NB_LIGNES &&
      (typeCase === 'path' || typeCase === 'bonus' || typeCase === 'end');

    if (mouvementsRestants > 0 && estValide) {
      setPerso({ x: newX, y: newY });
      setMouvementsRestants((prev) => prev - 1);

      if (typeCase === 'end') {
        setReachedEnd(true);
      }
    } else {
      setNbErreurs((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          deplacer(0, -1);
          break;
        case 'ArrowDown':
          deplacer(0, 1);
          break;
        case 'ArrowLeft':
          deplacer(-1, 0);
          break;
        case 'ArrowRight':
          deplacer(1, 0);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [perso, mouvementsRestants]);

  useEffect(() => {
    if (mouvementsRestants === 0 && dernierLancer !== null) {
      setShowPopup(true);
    }
  }, [mouvementsRestants, dernierLancer]);

  return (
    <div>
      <DiceRoller onRoll={handleLancer} />

      {dernierLancer !== null && (
        <p>🎲 Dé : {dernierLancer} | 🚶 Mouvements restants : {mouvementsRestants}</p>
      )}

      <p>❌ Erreurs : {nbErreurs}</p>
      {reachedEnd && <p>🎉 Bravo, vous avez atteint la sortie du labyrinthe !</p>}

      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onWrongAnswer={handleWrongAnswer}
        />
      )}

      <Stage width={NB_COLONNES * CASE_SIZE} height={NB_LIGNES * CASE_SIZE}>
        <Layer>
          {grille.map((ligne, y) =>
            ligne.map((type, x) => (
              <Rect
                key={`${x}-${y}`}
                x={x * CASE_SIZE}
                y={y * CASE_SIZE}
                width={CASE_SIZE}
                height={CASE_SIZE}
                fill={couleursParType[type] || '#ccc'}
                stroke="#000"
              />
            ))
          )}
          <Circle
            x={perso.x * CASE_SIZE + CASE_SIZE / 2}
            y={perso.y * CASE_SIZE + CASE_SIZE / 2}
            radius={CASE_SIZE / 3}
            fill="blue"
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default Labyrinthe1;

