import { useState, useEffect } from "react";
import { questions } from "./questions";
import { FaVolumeUp } from "react-icons/fa";

const Quiz = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [personalityResult, setPersonalityResult] = useState<string | null>(null);
  const [shareLink, setShareLink] = useState<string>("https://teojiayizoe.github.io/xscape/");
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const basePath = "/xscape"; // Update this to match your repository name

  useEffect(() => {
    if (currentQuestionIndex === 7) {
      const newAudio = new Audio(`${basePath}/music/office_phone.wav`);
      newAudio.play();
      setAudio(newAudio);
    } else if (audio) {
      audio.pause();
      setAudio(null);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    questions.forEach((_, index) => {
      const img = new Image();
      img.src = getImageForQuestion(index);
    });
  }, []);

  const handleAnswerChange = (choiceLetter: string) => {
    console.log(`User selected: ${choiceLetter}`);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = choiceLetter;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculatePersonalityResult(newAnswers);
      setShowResult(true);
    }
  };

  const calculatePersonalityResult = (answers: string[]) => {
    const combinations: { [key: string]: number } = {};
    for (let i = 0; i < answers.length; i++) {
      for (let j = i + 1; j < answers.length; j++) {
        const combination = [answers[i], answers[j]].sort().join("");
        combinations[combination] = (combinations[combination] || 0) + 1;
      }
    }

    const mostFrequentCombination = Object.keys(combinations).reduce((a, b) =>
      combinations[a] > combinations[b] ? a : b
    );

    let result: string;
    switch (mostFrequentCombination) {
      case "AB":
        result = "The Panicker";
        break;
      case "AC":
        result = "The Unifier";
        break;
      case "AD":
        result = "The Visionary";
        break;
      case "BC":
        result = "The Defeatist";
        break;
      case "BD":
        result = "The Risk-Taker";
        break;
      case "CD":
        result = "The Innovator";
        break;
      default:
        const frequency: { [key: string]: number } = {};
        answers.forEach((answer) => {
          if (answer) {
            frequency[answer] = (frequency[answer] || 0) + 1;
          }
        });
        const mostSelected = Object.keys(frequency).reduce((a, b) =>
          frequency[a] > frequency[b] ? a : b
        );
        switch (mostSelected) {
          case "A":
            result = "The Leader";
            break;
          case "B":
            result = "The Analyst";
            break;
          case "C":
            result = "The Collaborator";
            break;
          case "D":
            result = "The Wild Card";
            break;
          default:
            result = "Undefined Personality";
        }
        break;
    }

    setPersonalityResult(result);
    const fixedShareLink = "https://teojiayizoe.github.io/xscape/";
    setShareLink(fixedShareLink);
  };

  const getImageForResult = (result: string | null) => {
    switch (result) {
      case "The Panicker":
        return `${basePath}/images/panicker.png`;
      case "The Unifier":
        return `${basePath}/images/unifier.png`;
      case "The Visionary":
        return `${basePath}/images/visionary.png`;
      case "The Defeatist":
        return `${basePath}/images/defeatist.png`;
      case "The Risk-Taker":
        return `${basePath}/images/risk_taker.png`;
      case "The Innovator":
        return `${basePath}/images/innovator.png`;
      case "The Leader":
        return `${basePath}/images/leader.png`;
      case "The Analyst":
        return `${basePath}/images/analyst.png`;
      case "The Collaborator":
        return `${basePath}/images/collaborator.png`;
      case "The Wild Card":
        return `${basePath}/images/wild_card.png`;
      default:
        return "";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard!");
  };

  const replayAudio = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const restartQuiz = () => {
    setAnswers(new Array(questions.length).fill(""));
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setPersonalityResult(null);
    setShareLink("https://teojiayizoe.github.io/xscape"); 
    setQuizStarted(false);
  };

  const getImageForQuestion = (index: number) => {
    return `${basePath}/images/question_${index + 1}.jpg`;
  };

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <div>
          <h1>Are you ready to escape?</h1>
          <h3>Be ready to learn about yourself. </h3>
          <img src={`${basePath}/images/start.jpg`} alt="Start" className="start-image" />
          <button className="start-button" onClick={startQuiz}>
            Start
          </button>
        </div>
      ) : showResult ? (
        <div>
          <h1>Congratulations! You have escaped! Screenshot to share the result with your friends</h1>
          {personalityResult && (
            <div>
              <img src={getImageForResult(personalityResult)} alt="result" />
            </div>
          )}
           <div className="buttons-container">
           <button className="copy-button" onClick={copyToClipboard}>
            Share the game with your friends
          </button>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
          </div>
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="header-container">
            {currentQuestionIndex === 7 && (
              <div className="message-container">
                <h3>Click to play the hacker's message</h3>
                <FaVolumeUp
                  className="replay-icon"
                  onClick={replayAudio}
                  title="Replay Audio"
                />
              </div>
            )}
          </div>
          <img
            key={currentQuestionIndex}
            src={getImageForQuestion(currentQuestionIndex)}
            alt="question"
            className="question-image"
          />
          {questions[currentQuestionIndex].options.map((option, index) => {
            const letter = String.fromCharCode(65 + index);
            return (
              <button
                key={option}
                className="option-button"
                onClick={() => handleAnswerChange(letter)}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Quiz;
