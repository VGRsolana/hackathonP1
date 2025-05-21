import { Stage, Layer, Rect, Circle } from 'react-konva';
import React, { useEffect, useState } from 'react';
import DeLanceur from './lancer.tsx';

const CASE_SIZE = 50;
const NB_LIGNES = 10;
const NB_COLONNES = 15;

const grille = [
  ['wall', 'wall', 'wall', 'wall', 'bonus', 'wall', 'wall', 'wall', 'wall', 'bonus', 'path', 'path', 'path', 'path', 'end'],
  ['wall', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'bonus', 'wall', 'wall', 'path', 'path', 'path', 'wall', 'wall'],
  ['wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'path', 'wall', 'wall'],
  ['bonus', 'path', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'wall', 'wall', 'path', 'path', 'bonus'],
  ['wall', 'path', 'path', 'path', 'path', 'path', 'path', 'wall', 'path', 'wall', 'bonus', 'wall', 'wall', 'path', 'wall'],
  ['wall', 'wall', 'wall', 'wall', 'wall', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'path', 'path', 'path', 'wall'],
  ['wall', 'wall', 'path', 'path', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'path', 'wall', 'wall', 'wall', 'wall'],
  ['wall', 'wall', 'path', 'wall', 'path', 'path', 'path', 'wall', 'path', 'path', 'path', 'wall', 'wall', 'wall', 'wall'],
  ['start', 'path', 'path', 'wall', 'wall', 'bonus', 'wall', 'wall', 'bonus', 'wall', 'wall', 'wall', 'wall', 'wall', 'wall'],
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
  return { x: 0, y: 0 }; // valeur par défaut de secours
};

const Labyrinthe = () => {
  const [perso, setPerso] = useState(trouverPositionDepart());
  const [mouvementsRestants, setMouvementsRestants] = useState(0);
  const [dernierLancer, setDernierLancer] = useState(null);
  console.log(perso);
  

  const handleLancer = (resultat) => {
    console.log(resultat);
    
    setMouvementsRestants(resultat);
    setDernierLancer(resultat);

  };
    
  const deplacer = (dx, dy) => {
    const newX = perso.x + dx;
    const newY = perso.y + dy;
    
  console.log(mouvementsRestants);
  
  if (
    mouvementsRestants > 0 &&
    newX >= 0 &&
    newX < NB_COLONNES &&
    newY >= 0 &&
    newY < NB_LIGNES &&
    grille[newY][newX] === 'path' || grille[newY][newX] === 'bonus' || grille[newY][newX] === 'end'
    ) {
      console.log("de");
      
      setPerso({ x: newX, y: newY });
      setMouvementsRestants((prev) => prev - 1);;
    }
  };

  // Écoute du clavier
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      
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
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [perso, deplacer]);

  return (
    <div>
      <DeLanceur onLancer={handleLancer} />
      {dernierLancer !== null && (
        <p>Dé : {dernierLancer} | Mouvements restants : {mouvementsRestants}</p>
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

export default Labyrinthe;
