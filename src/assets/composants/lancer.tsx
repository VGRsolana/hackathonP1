/* DeLanceur.jsx
import React from 'react';

const DeLanceur = ({ onLancer }) => {
  const lancer = () => {
    const resultat = Math.floor(Math.random() * 6) + 1;
    onLancer(resultat); // on envoie le résultat au parent
  };

  return (
    <div>
      <button onClick={lancer}> Lancer les dés</button>
    </div>
  );
};

export default DeLanceur; */

