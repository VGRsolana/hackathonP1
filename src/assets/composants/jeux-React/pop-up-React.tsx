import React, { useEffect, useState } from 'react';
import "../pop-up.css"


interface PopupProps {
  onClose: () => void;
  onWrongAnswer: () => void;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
    {
      question: "Quelle commande permet de créer un nouveau projet React avec Vite ?",
      options: [
        "npx create-react-app mon-app",
        "npm create vite@latest",
        "npx vite-create mon-app",
        "yarn react-init"
      ],
      correctAnswer: "npm create vite@latest",
    },
    {
      question: "Quel hook est utilisé pour gérer l’état d’un composant fonctionnel ?",
      options: [
        "useEffect",
        "useState",
        "useReducer",
        "useRef"
      ],
      correctAnswer: "useState",
    },
    {
      question: "Quel hook est utilisé pour exécuter du code au montage ou lors d’un changement de dépendances ?",
      options: [
        "useContext",
        "useState",
        "useEffect",
        "useMemo"
      ],
      correctAnswer: "useEffect",
    },
    {
      question: "Comment appelle-t-on un composant React ?",
      options: [
        "<Composant />",
        "Composant()",
        "#Composant",
        "this.Composant"
      ],
      correctAnswer: "<Composant />",
    },
    {
      question: "Quelle syntaxe permet d'insérer une variable dans le JSX ?",
      options: [
        "{{variable}}",
        "{variable}",
        "[variable]",
        "${variable}"
      ],
      correctAnswer: "{variable}",
    },
    {
      question: "Que retourne obligatoirement un composant React ?",
      options: [
        "Une promesse",
        "Du JSX",
        "Une fonction",
        "Un objet"
      ],
      correctAnswer: "Du JSX",
    },
    {
      question: "Quel hook est utilisé pour référencer un élément DOM ?",
      options: [
        "useMemo",
        "useEffect",
        "useRef",
        "useCallback"
      ],
      correctAnswer: "useRef",
    },
    {
      question: "Quelle bibliothèque est souvent utilisée avec React pour la gestion des routes ?",
      options: [
        "React Router",
        "React Nav",
        "React Page",
        "RouterJS"
      ],
      correctAnswer: "React Router",
    }
  ];

const Popup: React.FC<PopupProps> = ({ onClose, onWrongAnswer }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [wrongAnswerIndex, setWrongAnswerIndex] = useState<number | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, []);

  const handleAnswerClick = (answer: string, index: number) => {
    if (currentQuestion) {
      if (answer === currentQuestion.correctAnswer) {
        onClose();
      } else {
        onWrongAnswer(); // ➕ compte une erreur
        setWrongAnswerIndex(index);
        setTimeout(() => {
          onClose();
        }, 1000); // ⏱️ Ferme après 1s
      }
    }
  };

  if (!currentQuestion) return null;

  return (
    <div className="popup">
      <h2>Fin des mouvements !</h2>
      <p className="question">{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={wrongAnswerIndex === index ? 'wrong' : ''}
            onClick={() => handleAnswerClick(option, index)}
            disabled={wrongAnswerIndex !== null}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Popup;
