import React from "react";
import { decode } from "html-entities";
import Correct from "../assets/correct.svg";
import Wrong from "../assets/wrong.svg";

const Quiz = (props) => {
    return (
        <div className="quiz-container">
            <div className="question-and-true-false-icon-container">
                <h4 className="question">{decode(props.question)}</h4>
                <div className="true-false">
                    {
                        props.correctAnswer === props.selectedAnswer && props.showAnswers
                            ? <img src={Correct} width="35" alt="Correct Answer"></img>
                            : props.showAnswers
                                ? <img src={Wrong} width="30" alt="Wrong Answer"></img>
                                : ""
                    }
                </div>
            </div>
            <div className="answers-container">
                <button
                    className={`answers ${props.showAnswers && props.correctAnswer === decode(props.answers[0])
                        ? "correct-answer"
                        : props.showAnswers && props.selectedAnswer === decode(props.answers[0])
                            ? "wrong-answer"
                            : props.selectedAnswer === decode(props.answers[0])
                                ? "selected-answer"
                                : ""
                        }`}
                    onClick={!props.showAnswers ? (event) => props.handleAnswerSelection(event, props.id, props.correctAnswer) : () => { }}
                >
                    {decode(props.answers[0])}
                </button>
                <button
                    className={`answers ${props.showAnswers && props.correctAnswer === decode(props.answers[1])
                        ? "correct-answer"
                        : props.showAnswers && props.selectedAnswer === decode(props.answers[1])
                            ? "wrong-answer"
                            : props.selectedAnswer === decode(props.answers[1])
                                ? "selected-answer"
                                : ""
                        }`}
                    onClick={!props.showAnswers ? (event) => props.handleAnswerSelection(event, props.id, props.correctAnswer) : () => { }}
                >
                    {decode(props.answers[1])}
                </button>
                {props.type !== "boolean" &&
                    <>
                        <button
                            className={`answers ${props.showAnswers && props.correctAnswer === decode(props.answers[2])
                                ? "correct-answer"
                                : props.showAnswers && props.selectedAnswer === decode(props.answers[2])
                                    ? "wrong-answer"
                                    : props.selectedAnswer === decode(props.answers[2])
                                        ? "selected-answer"
                                        : ""
                                }`}
                            onClick={!props.showAnswers ? (event) => props.handleAnswerSelection(event, props.id, props.correctAnswer) : () => { }}
                        >
                            {decode(props.answers[2])}
                        </button>
                        <button
                            className={`answers ${props.showAnswers && props.correctAnswer === decode(props.answers[3])
                                ? "correct-answer"
                                : props.showAnswers && props.selectedAnswer === decode(props.answers[3])
                                    ? "wrong-answer"
                                    : props.selectedAnswer === decode(props.answers[3])
                                        ? "selected-answer"
                                        : ""
                                }`}
                            onClick={!props.showAnswers ? (event) => props.handleAnswerSelection(event, props.id, props.correctAnswer) : () => { }}
                        >
                            {decode(props.answers[3])}
                        </button>
                    </>
                }
            </div>
            <hr />
        </div>
    );
}

export default Quiz;
