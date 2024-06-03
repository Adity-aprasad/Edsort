import React, { useState } from 'react';
import { QuizData } from '../data/QuizData';
import QuizResult from '../comp/QuizResult';
import '../comp/Quiz.css';

export function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    
    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    }

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    return (
        <div className="quiz">
            <p className="ed-sort-learn-together-grow-together">EdSort</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span className="question-no-1">{currentQuestion + 1}. </span>
                            <span className="type-your-question-here">{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {QuizData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : ""}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <input type="button" value="Next" className="next-button" onClick={changeQuestion} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
