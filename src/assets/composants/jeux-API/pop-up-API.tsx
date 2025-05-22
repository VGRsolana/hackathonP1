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
      question: "Que signifie l'acronyme API ?",
      options: [
        "Application Programming Interface",
        "Advanced Program Integration",
        "Automatic Process Interface",
        "Applied Protocol Instruction"
      ],
      correctAnswer: "Application Programming Interface",
    },
    {
      question: "Quel protocole est le plus couramment utilisé pour communiquer avec une API web ?",
      options: [
        "FTP",
        "HTTP",
        "SSH",
        "SMTP"
      ],
      correctAnswer: "HTTP",
    },
    {
      question: "Quel verbe HTTP est utilisé pour récupérer des données ?",
      options: [
        "POST",
        "DELETE",
        "GET",
        "PUT"
      ],
      correctAnswer: "GET",
    },
    {
      question: "Quel verbe HTTP est utilisé pour envoyer de nouvelles données à une API ?",
      options: [
        "GET",
        "POST",
        "PATCH",
        "HEAD"
      ],
      correctAnswer: "POST",
    },
    {
      question: "Quel code HTTP indique que la requête s’est bien déroulée ?",
      options: [
        "404",
        "500",
        "403",
        "200"
      ],
      correctAnswer: "200",
    },
    {
      question: "Que retourne une API lorsqu'une ressource demandée n’existe pas ?",
      options: [
        "200 OK",
        "301 Moved Permanently",
        "404 Not Found",
        "500 Internal Server Error"
      ],
      correctAnswer: "404 Not Found",
    },
    {
      question: "Dans React, quelle méthode est couramment utilisée pour appeler une API ?",
      options: [
        "setTimeout",
        "useState",
        "fetch",
        "getElementById"
      ],
      correctAnswer: "fetch",
    },
    {
      question: "Quelle méthode permet d’attendre qu'une requête API soit terminée avant de continuer ?",
      options: [
        "await",
        "console.log",
        "setInterval",
        "map"
      ],
      correctAnswer: "await",
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


