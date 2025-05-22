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
    question: "Quelle propriété CSS permet de changer la couleur du texte ?",
    options: ["color", "background-color", "font-size", "text-align"],
    correctAnswer: "color",
  },
  {
    question: "Quel élément HTML est utilisé pour créer un paragraphe ?",
    options: ["<p>", "<div>", "<span>", "<section>"],
    correctAnswer: "<p>",
  },
  {
    question: "Quelle propriété CSS est utilisée pour ajouter de l’espace à l'intérieur d’un élément ?",
    options: ["padding", "margin", "border", "width"],
    correctAnswer: "padding",
  },
  {
    question: "Quelle balise HTML sert à faire des listes non ordonnées ?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: "<ul>",
  },
  {
    question: "Quelle propriété CSS rend un élément invisible tout en gardant sa place ?",
    options: ["visibility: hidden", "display: none", "opacity: 0", "z-index: -1"],
    correctAnswer: "visibility: hidden",
  },
  {
    question: "Que signifie HTML ?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "Quelle propriété CSS contrôle la taille de la police ?",
    options: ["font-size", "font-style", "text-size", "text-align"],
    correctAnswer: "font-size"
  },
  {
    question: "Quel attribut HTML permet de donner un identifiant unique à un élément ?",
    options: ["id", "class", "name", "style"],
    correctAnswer: "id"
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




