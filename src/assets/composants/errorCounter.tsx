import React, { useState, useEffect } from 'react';

type ErrorCounterProps = {
  active: boolean;
  reachedEnd: boolean;
};

const ErrorCounter: React.FC<ErrorCounterProps> = ({ active, reachedEnd }) => {
  const [errors, setErrors] = useState(0);

  useEffect(() => {
    if (reachedEnd) {
      console.log(`Nombre total d'erreurs : ${errors}`);
    }
  }, [reachedEnd, errors]);

  // Cette fonction peut être appelée par le parent via une ref ou via callback
  const increment = () => {
    if (active && !reachedEnd) {
      setErrors((prev) => prev + 1);
    }
  };

  // Expérience utilisateur simple
  return (
    <div>
      <p>❌ Erreurs commises : {errors}</p>
    </div>
  );
};

export default ErrorCounter;
